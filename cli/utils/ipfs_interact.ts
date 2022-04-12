import fs, { PathOrFileDescriptor } from "fs";
import * as anchor from "@project-serum/anchor";
import { CID } from "ipfs-core";
import { isIPFS, create as node_create } from "ipfs-core";
import { create, globSource } from "ipfs-http-client";
import { concat as uint8ArrayConcat } from "uint8arrays/concat";
import * as pinata from "@pinata/sdk";

const infura_url = { url: "https://ipfs.infura.io:5001" };
const infura_browse = "https://ipfs.infura.io/ipfs";

export const upload_file = async (
  path: PathOrFileDescriptor,
  track: String = "",
  user: String = "",
  artist: String = "",
  title: String = "",
  media_type: String = "image"
) => {
  let cid = "";
  //const node = create(infura_url);
  const node = await node_create({ repo: "ok" + Math.random() });

  const file = fs.readFileSync(path);
  for await (const f of node.addAll([{ path: path, content: file }], {
    wrapWithDirectory: true,
  })) {
    console.log(`${f.path ? f.path : "dir"}: ${infura_browse}/${f.cid}`);
    // Last CID is the one to the directory
    cid = f.cid.toString();
  }
  const dag_cid = await node.dag.put(
    {
      cid: CID.parse(cid),
      file: path,
      user: user,
      track: track,
      artist: artist,
      title: title,
      media_type: media_type,
      timestamp: new Date().getTime(),
    },
    { pin: true }
  );
  //node.stop()
  return dag_cid.toString();
};

export const get_file = async (track_cid: String) => {
  const node = await node_create();
  const cids = [];
  // load directory and write out each track
  for await (const file of node.ls(String(track_cid))) {
    console.log(
      `$cid: ${file.cid}, name: ${file.name}, path: ${file.path}, fild cid: ${file.cid}, ${file.type}`
    );
    const chunks = [];
    for await (const chunk of node.cat(file.cid)) {
      chunks.push(chunk);
    }
    fs.writeFileSync(file.name, uint8ArrayConcat(chunks));
    cids.push({ path: file.path, cid: file.cid });
  }
  node.stop();
  return cids;
};

export const get_infura_url = async (cid: String) => {
  return `${infura_browse}/${cid}`;
};
