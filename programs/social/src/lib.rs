use anchor_lang::prelude::*;

declare_id!("7p8C6xyHkFbexknPCjm1KbGmVgd1mbP4GRPKt7q9HLbn");

#[program]
pub mod social {
    use super::*;
    pub fn create_user(ctx: Context<InitializeUser>, handle: String) -> Result<()> {
        ctx.accounts.user.handle = handle;
        ctx.accounts.user.authority = *ctx.accounts.authority.key;
        ctx.accounts.user.bump = *ctx.bumps.get("user").unwrap();
        Ok(())
    }

    // Some funkiness in the #instruction macro
    // and needing year and month to generate accounts has caused
    // me to use this really bizare pattern
    pub fn create_user_month(
        ctx: Context<InitializeUserMonth>,
        _yearstr: String,
        _monthstr: String,
        user_month: UserMonth,
    ) -> Result<()> {
        ctx.accounts.user_month.set_inner(user_month);
        Ok(())
    }

    pub fn create_post(
        ctx: Context<CreatePost>,
        _post_index: String,
        post: UserPost,
    ) -> Result<()> {
        require!(
            post.title.chars().count() < 50,
            ErrorCodes::PostTitleTooLong
        );
        ctx.accounts.post.set_inner(post);
        ctx.accounts.user_month.posts.push(ctx.accounts.post.key());
        ctx.accounts.user_month.post_count += 1;
        Ok(())
    }

    pub fn vote_post(ctx: Context<VotePost>, vote: PostVote) -> Result<()> {
        ctx.accounts.post_vote.set_inner(vote);
        if ctx.accounts.post_vote.upvote {
            ctx.accounts.user_post.upvotes += 1;
        } else {
            ctx.accounts.user_post.downvotes += 1;
        }
        Ok(())
    }

    pub fn follow_user(ctx: Context<FollowUser>) -> Result<()> {
        if !ctx.accounts.followed.blocked.contains(&ctx.accounts.followed.key()) {
        ctx.accounts.my_follow.following.push(ctx.accounts.followed.key());
        ctx.accounts.followed.followers.push(ctx.accounts.authority.key());
        Ok(())
        } else {
            err!(ErrorCodes::UnableToFollow)
        }
    }

    pub fn remove_follower(ctx: Context<FollowUser>, block: bool) -> Result<()> {
        let follower_key = ctx.accounts.followed.key().clone();
        let followed_by_key = ctx.accounts.authority.key().clone();
        ctx.accounts.my_follow.followers.retain(|&x| x != follower_key);
        ctx.accounts.followed.following.retain(|&x| x != followed_by_key);
        if block {
            ctx.accounts.my_follow.blocked.push(ctx.accounts.followed.key());
        }
        Ok(())
    }

    pub fn create_topic(ctx: Context<InitializeTopic>, name: String) -> Result<()> {
        ctx.accounts.topic.name = name;
        Ok(())
    }

    pub fn add_topic_post(ctx: Context<TopicPost>) -> Result<()> {
        ctx.accounts.topic.posts.push(ctx.accounts.post.key());
        ctx.accounts.topic.post_count += 1;
        Ok(())
    }
 }

#[derive(Accounts)]
#[instruction(bump: u8)]
pub struct InitializeUser<'info> {
    #[account(
        init,
        seeds = [b"user".as_ref(), 
        authority.key().as_ref()
        ],
        bump,
        payer=authority,
        space = User::LEN
    )]
    user: Account<'info, User>,
    #[account(mut)]
    authority: Signer<'info>,
    /// CHECK: we dont read from this
    system_program: AccountInfo<'info>,
}

#[derive(Accounts)]
#[instruction(name: String)]
pub struct InitializeTopic<'info> {
    #[account(
        init,
        seeds = [b"topic".as_ref(), 
        name.as_ref(),
        ],
        bump,
        payer=authority,
        space = Topic::LEN
    )]
    topic: Account<'info, Topic>,
    #[account(mut)]
    authority: Signer<'info>,
    /// CHECK: we dont read from this
    system_program: AccountInfo<'info>,
}

#[derive(Accounts)]
#[instruction(yearstr: String, monthstr: String)]
pub struct InitializeUserMonth<'info> {
    #[account(
        init,
        seeds = [
            b"user_month".as_ref(),
            authority.key().as_ref(),
            yearstr.as_ref(),
            monthstr.as_ref(),
            ],
        bump,
        payer=authority,
        space=128
    )]
    user_month: Account<'info, UserMonth>,
    #[account(mut)]
    authority: Signer<'info>,
    /// CHECK: We dont neeed to worry about this
    system_program: AccountInfo<'info>,
}

#[derive(Accounts)]
// #[instruction(post: UserPost)]
pub struct VotePost<'info> {
    #[account(
        init,
        seeds=[
            b"vote_post".as_ref(),
            authority.key().as_ref(),
            user_post.key().as_ref()
            ],
        bump,
        payer=authority,
        space=PostVote::LEN
    )]
    post_vote: Account<'info, PostVote>,
    #[account(mut)]
    user_post: Account<'info, UserPost>,
    #[account(mut)]
    authority: Signer<'info>,
    /// CHECK: We dont neeed to worry about this
    system_program: AccountInfo<'info>,
}

#[derive(Accounts)]
#[instruction(post_index: String)]
pub struct CreatePost<'info> {
    #[account(
        init,
        seeds = [
            b"user_post".as_ref(),
            authority.key().as_ref(),
            user_month.key().as_ref(),
            post_index.as_ref()
        ],
        bump,
        payer=authority,
        space=UserPost::LEN
    )]
    post: Account<'info, UserPost>,
    #[account(mut)]
    authority: Signer<'info>,
    #[account(mut)]
    user_month: Account<'info, UserMonth>,
    /// CHECK: We dont neeed to worry about this
    system_program: AccountInfo<'info>,
}

#[derive(Accounts)]
pub struct TopicPost<'info> {
    #[account(mut)]
    topic: Account<'info, Topic>,
    #[account(mut)]
    post: Account<'info, UserPost>,
}

#[derive(Accounts)]
pub struct FollowUser<'info> {
    #[account(
        seeds = [
            b"followers".as_ref(),
            authority.key().as_ref()
        ],
        bump
    )]
    #[account(mut)]
    my_follow: Account<'info, FollowList>,
    #[account(mut)]
    followed: Account<'info, FollowList>,
    #[account(mut)]
    authority: Signer<'info>,
    /// CHECK: We dont neeed to worry about this
    system_program: AccountInfo<'info>,
}

#[account]
#[derive(Debug)]
pub struct User {
    pub authority: Pubkey,
    pub bump: u8,
    pub handle: String,
}

impl User {
    const LEN: usize = 32 + 1 + (4 * 30);
}
#[account]
#[derive(Debug)]
pub struct UserMonth {
    pub authority: Pubkey,
    pub user_account: Pubkey,
    pub bump: u8,
    // Store year and month so we can
    // Iterate on user posts for the year and month
    pub year: u16,
    pub month: u8,
    pub post_count: u16,
    pub posts: Vec<Pubkey>,
}

#[account]
#[derive(Debug)]
pub struct UserPost {
    pub authority: Pubkey,  //32
    pub user_month: Pubkey, //32
    pub timestamp: u32,     //4
    pub upvotes: u32,       // 4
    pub downvotes: u32,     //4
    pub main_cid: String,   // 4* 59
    pub cid: String,        // 4*59
    pub title: String,      //4*50
    pub content: String,     // 4 * 144
    pub tags: Vec<Pubkey>,  // 32 * 10
    pub topics: Vec<Pubkey>, //32 * 10
}

#[account]
#[derive(Debug)]
pub struct PostVote {
    pub authority: Pubkey,
    pub user_post: Pubkey,
    pub timestamp: u32,
    pub upvote: bool,
}

#[account]
#[derive(Debug)]
pub struct FollowList {
    authority: Pubkey,
    followers: Vec<Pubkey>,
    following: Vec<Pubkey>,
    blocked: Vec<Pubkey>,
}

#[account]
#[derive(Debug)]
pub struct Topic {
    pub authority: Pubkey,
    pub post_count: u32,
    pub name: String,
    pub posts: Vec<Pubkey>,
}

impl Topic { 
    const LEN: usize = 32 + 4 + (4 * 50) + 32 * 200;
}

impl UserPost {
    const LEN: usize = 32 + 32 + 4 + 4 + 4 + (4*59) * 2 + (4 * 50) + (4 * 144) +  ((32* 10) * 2);
}

impl PostVote {
    const LEN: usize = 32 + 32 + 4 + 1 + 8;
}

#[error_code]
pub enum ErrorCodes {
    #[msg("Post title needs to be less than 50 characters")]
    PostTitleTooLong,
    #[msg("User Key and User Account do not match.")]
    MismatchedUserAccount,
    #[msg("You are not allowed to follow the user.")]
    UnableToFollow,
}
