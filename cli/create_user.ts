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

const argv = yargs(process.argv.slice(2)).options({
  handle: { type: "string", demandOption: true ,alias: "h" },
}).argv;

const main = async () => {
  const args = await argv;
  anchor.setProvider(anchor.Provider.env());

  let cid = args.cid ? args.cid : "";
  const authority = getAuthority().publicKey;
  const [user, bump] = await getUser(authority);
  let fetchedUserExists = await program.account.user.fetch(user.toString());
  let fetchedUser = null
  if (!fetchedUserExists){
  const tx = await program.methods.createUser(args.handle).accounts({
    user,
    authority,
    systemProgram: anchor.web3.SystemProgram.programId
  }).rpc();

  console.log("Your transaction signature", tx);
  console.log("User Id", user.toString());
  fetchedUser = await program.account.user.fetch(user.toString());
}
else {
  fetchedUser = fetchedUserExists
  console.log('User already exists')
}
console.log(
  `Your user id ${fetchedUser.authority.toString()} for handle: ${args.handle} and wallet ${authority.toString()}`
);
};

main().then(() => {
  console.log("Created User successfully.");
});
