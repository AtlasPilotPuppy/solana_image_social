import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { getMultipleAccounts } from "@project-serum/anchor/dist/cjs/utils/rpc";
import { assert } from "chai";
import { Social } from "../target/types/social";
const { PublicKey } = anchor.web3;
import {getUser, getAuthority, getPost,getVote, getUserMonth, program, getTopic, createPost} from "../cli/utils/prelude";

describe("social", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());
  const otherUser = anchor.web3.Keypair.generate();
  const provider = anchor.getProvider()
  const topicName = "Test_topic";

  it("Is initialized!", async () => {
    const authority = getAuthority().publicKey;
    const [user, bump] = await getUser(authority);
    console.log("USER: " + user);
    console.log(`user bump: ${bump}`);
    const tx = await program.methods
      .createUser("#Boss")
      .accounts({
        user,
        authority,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .rpc();
    console.log("Your transaction signature", tx);
  });

  it("Create another user!", async () => {
    const authority = otherUser.publicKey;
       await provider.connection.confirmTransaction(
      await provider.connection.requestAirdrop(otherUser.publicKey, 10000000000),
      "confirmed"
    );
    const [user, bump] = await getUser(otherUser.publicKey);
    console.log("Other USER: " + user);
    console.log(`user bump: ${bump}`);
    const tx = await program.methods
      .createUser("#Follower")
      .accounts({
        user,
        authority,
        systemProgram: anchor.web3.SystemProgram.programId,
      }).signers([otherUser])
      .rpc();
    console.log("Your transaction signature", tx);
  });

  it("Can not re-create user", async () => {
    const authority = getAuthority().publicKey;
    const [user, bump] = await getUser(authority);
    try {
      const tx = await program.rpc.createUser("My User", {
        accounts: {
          user,
          authority,
          systemProgram: anchor.web3.SystemProgram.programId,
        },
      });
      console.log("Your transaction signature", tx);
    } catch (e) {
      assert.ok(String(e).startsWith("Error: failed to send transaction"));
    }
  });

  it("Can create user month accounts", async () => {
    const authority = getAuthority().publicKey;
    const [user, _bump] = await getUser(authority);
    console.log("RECOVERED: " + user);
    const date = new Date();
    const [userMonth, bump] = await getUserMonth(date, authority);
    const tx = await program.methods
      .createUserMonth(
        date.getFullYear().toString(),
        date.getMonth().toString(),
        {
          userAccount: user,
          year: 2022,
          month: 3,
          posts: [],
        }
      )
      .accounts({
        userMonth: userMonth,
        authority: authority,
        //user:user,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .rpc();
    console.log("Made call");
    const um = await program.account.userMonth.fetch(userMonth);
    console.log("Fetched userMonth");
    console.log(um);
    console.log(date.getFullYear());
  });

  it("Can create topics", async () => {
    const authority = getAuthority().publicKey;

    const [topicAct, bump] = await getTopic(topicName);
    const topic = await program.methods.createTopic(topicName).accounts({
      topic: topicAct,
      authority: authority,
    }).rpc();

      const topicAccount = await program.account.topic.fetch(topicAct);
      assert.equal(topicAccount.name, topicName);

  });

  it("Can create user posts", async () => {
    const authority = getAuthority().publicKey;
    const [topicAct, _] = await getTopic(topicName);
    const [user, _bump] = await getUser(authority)
    const {post, tx, userMonth} = await createPost(
      authority,
      "test",
      "TEST POST",
      "TEST",
      "TEST CID",
      [topicAct],
      [user]
    )

    const createdPost = await program.account.userPost.fetch(post);
    // Add post to topic
    const fetchedTopic = await program.account.topic.fetch(topicAct);
    assert.equal(fetchedTopic.postCount, 1);
    const userMonthAccount = await program.account.userMonth.fetch(userMonth);
    assert(createdPost.cid == "TEST");
    assert.equal(userMonthAccount.postCount, 1);
    assert.deepNestedInclude(
      userMonthAccount.posts,
      post,
      "Post Not found in UserMOnth"
    );
  });

  it("Can create vote posts", async () => {
    const authority = getAuthority().publicKey;
    const date = new Date();
    const [userMonth, bump] = await getUserMonth(date, authority);
    const um = await program.account.userMonth.fetch(userMonth);
    const postIndex = um.postCount;
    const [post, postBump] = await getPost(authority, userMonth, postIndex);
    const [vote, voteBump] = await getVote(authority, post);

    const tx = await program.methods
      .votePost({
        timestamp: date.getTime() / 1000, 
        upvote: true
      })
      .accounts({
        postVote: vote,
        userPost: post,
        authority: authority,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .rpc();
      const postAccount = await program.account.userPost.fetch(post);
      assert.equal(postAccount.upvotes, 1);

  });
});
