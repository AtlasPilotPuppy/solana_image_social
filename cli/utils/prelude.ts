import * as anchor from "@project-serum/anchor";
import { AccountNamespace, Address, Program } from "@project-serum/anchor";
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

  export const userAccountExists = async (user: anchor.web3.PublicKey) => {
      const acct = await program.account.user.fetch(user);
      if (acct) {
          return true
      } else { return false }
  }

  export const getCreateUser  = async (authority: anchor.web3.PublicKey, handle?: string) => {
    const [user, _] = await getUser(authority);
    if (userAccountExists(user)) {
        return user
    } else {
        if (!handle) {throw("User does not exist. Handle is needed to create new User")}
        const tx = await program.methods
        .createUser(handle)
        .accounts({
          user,
          authority,
          systemProgram: anchor.web3.SystemProgram.programId,
        })
        .rpc();
        return user
    }
  }

  export const getCreateUserMonth = async (
      authority: anchor.web3.PublicKey, 
      userKey: anchor.web3.PublicKey, 
      date?: Date= new Date()): Promise<anchor.web3.PublicKey> =>  {
    const [userMonthKey, _] = await getUserMonth(date, authority);
    const [user, _bump] = userKey? [userKey, 0]: await getUser(authority);
    const userMonth = await program.account.userMonth.fetch(userMonthKey);
    if (! userMonth) {
        const tx = await program.methods
        .createUserMonth(
          date.getFullYear().toString(),
          date.getMonth().toString(),
          {
            userAccount: user,
            year: date.getFullYear(),
            month: date.getMonth(),
            posts: [],
          }
        )
        .accounts({
          userMonth: userMonthKey,
          authority: authority,
          systemProgram: anchor.web3.SystemProgram.programId,
        })
        .rpc();
    }
    return userMonthKey;
  }

  export const getLastPostIndex = async (userMonth: anchor.web3.PublicKey) => {
    const userMonthAct = await program.account.userMonth.fetch(userMonth);
    if (userMonthAct) {
        return userMonthAct.postCount;
    }
    return 0
  }

  export const getTimestamp = () => {
    return (new Date()).getTime() / 1000
  }


  export const topicAddPost = async (topic: Address, post: Address) => {
    const tx = await program.methods.addTopicPost().accounts({
        topic: topic,
        post: post,
    }).rpc();
  }

  export const createPost = async (
    authority: anchor.web3.PublicKey,
    title: string,
    content: string,
    cid: string, 
    mainCid: String,
    topics: Array<Address> = [],
    tags: Array<Address> = []
    ) => {
        const [user, _] = await getUser(authority);
        if (!userAccountExists(user)) {throw("User Account is not initialized. Please create an account first")};
        const userMonth = await getCreateUserMonth(authority, user);
        const postIndex = await getLastPostIndex(userMonth) + 1
        const [post, _postBump] = await getPost(authority, userMonth, postIndex);
        console.error("CREATING TX");
        const tx = await program.methods.createPost(postIndex.toString(), {
            authority: authority,
            userMonth: userMonth,
            timestamp: getTimestamp(),
            mainCid: mainCid,
            cid: cid,
            title: title,
            content: content,
            tags: tags,
            topics: topics,
        }).accounts({
            post: post,
            authority: authority,
            userMonth: userMonth,
            systemProgram: anchor.web3.SystemProgram.programId,
        }).rpc();
        console.error("CREATED TX");
        for (const topic of topics) {
            const tx = await topicAddPost(topic, post)
            console.log(tx);
        }
    return {post: post, tx: tx, userMonth: userMonth, postIndex: postIndex,}

  }