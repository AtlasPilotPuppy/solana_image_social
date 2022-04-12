import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
const { PublicKey } = anchor.web3;

import { Social } from "../../target/types/social";

anchor.setProvider(anchor.Provider.env());

export const program = anchor.workspace.Social as Program<Social>;
export const getAuthority = () => {
    return program.provider.wallet;
  };

 export const getUserMonth = async (
    date: Date,
    authority: anchor.web3.PublicKey
  ): Promise<[anchor.web3.PublicKey, number]> => {
    const [userMonth, bump] = await PublicKey.findProgramAddress(
      [
        Buffer.from("user_month"),
        authority.toBuffer(),
        Buffer.from(date.getFullYear().toString()),
        Buffer.from(date.getMonth().toString()),
      ],
      program.programId
    );
    return [userMonth, bump];
  };

  export const getUser = async (
    authority: anchor.web3.PublicKey
  ): Promise<[anchor.web3.PublicKey, number]> => {
    const [user, bump] = await PublicKey.findProgramAddress(
      [Buffer.from("user"), authority.toBuffer()],
      program.programId
    );
    return [user, bump];
  };

  export const getTopic = async (
    name: string
  ): Promise<[anchor.web3.PublicKey, number]> => {
    const [topic, bump] = await PublicKey.findProgramAddress(
      [Buffer.from("topic"), Buffer.from(name)],
      program.programId
    );
    return [topic, bump];
  };

  export const getPost = async (
    authority: anchor.web3.PublicKey,
    userMonth: anchor.web3.PublicKey,
    postIndex: number
  ) => {
    return await PublicKey.findProgramAddress(
      [
        Buffer.from("user_post"),
        authority.toBuffer(),
        userMonth.toBuffer(),
        Buffer.from(postIndex.toString()),
      ],
      program.programId
    );
  };

  export const getVote = async (
    authority: anchor.web3.PublicKey,
    post: anchor.web3.PublicKey
  ) => {
    return await PublicKey.findProgramAddress(
      [Buffer.from("vote_post"), authority.toBuffer(), post.toBuffer()],
      program.programId
    );
  };