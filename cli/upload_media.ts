#!/usr/bin/env ts-node
import yargs from "yargs";
import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { utf8 } from "@project-serum/anchor/dist/cjs/utils/bytes";
import { Social } from "../target/types/social";
import fs from "fs";
import type { CID } from "ipfs-core";
import { isIPFS } from "ipfs-core";
import { create, globSource } from "ipfs-http-client";
import { upload_file } from "./utils/ipfs_interact";
import {
  program, getAuthority, getPost, getUser, getVote,
} from "./utils/prelude";

const argv = yargs(process.argv.slice(2))
  .describe({ key: "Update solana track entry." })
  .options({
    title: { type: "string", default: "", alias: "t" },
    main: {type: "string", demandOption: true, alias: "m"},
    tags: { type: "array", default: "", alias: "a" },
    paths: { type: "array", demandOption: true , alias: "p" },
    
  }).argv;

const main = async () => {
  const args = await argv;
  if (args.cid && !isIPFS.cid(args.cid)) {
    console.error(`CID ${args.cid} is invalid`);
    process.exit(1);
  }
  anchor.setProvider(anchor.Provider.env());
  let cid = args.cid ? args.cid : "";
  cid = await upload_file(
    args.path,
    key.toString(),
    signer.publicKey.toString(),
    args.artist,
    args.title
  );


  const authority = getAuthority().publicKey;
  const [user, bump] = await getUser(authority);
  let fetchedUser = await program.account.user.fetch(user.toString());
  if (!fetchedUser) {
    console.log("User not initialized");
    process.exit(1);
  }


};

main().then(() => {
  console.log("Created User successfully.");
});
