import * as anchor from "@project-serum/anchor";
import { create, CID } from "ipfs-http-client";

const infura_browse = "https://ipfs.infura.io/ipfs";
const infura_url = { url: "https://ipfs.infura.io:5001" };

export class DisplayImage {
  cid: String = "";
  title?: String;
  key?: anchor.web3.PublicKey;
  link?: String[];
  extra?: String[];

  constructor(
    cid: String,
    track_title?: String,
    key?: anchor.web3.PublicKey,
    extra?: String[]
  ) {
    this.cid = cid;
    this.title = track_title;
    this.key = key;
    this.extra = extra;
  }
  get_infura_url = (cid?: String) => {
    return `${infura_browse}/${cid ? cid : this.cid}`;
  };

  get_infura_link = async () => {
    const client = create(infura_url);
    const cid = CID.asCID(this.cid);
    if (!cid) {
      return;
    }
    const links = [];
    for await (const item of client.files.ls(cid)) {
      links.push(this.get_infura_url(item.cid.toString()));
    }
    return links;
  };
}
