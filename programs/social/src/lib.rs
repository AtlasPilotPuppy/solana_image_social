use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

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
        _yearstr:String,
        _monthstr:String,
        user_month: UserMonth
    ) -> Result<()> {
        ctx.accounts.user_month.set_inner(user_month);
        Ok(())
    }

    pub fn create_post(ctx: Context<CreatePost>, post: UserPost) -> Result<()> {
        ctx.accounts.post.set_inner(post);
        ctx.accounts.user_month.posts.push(ctx.accounts.post.key());
        ctx.accounts.user_month.post_count += 1;
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
    system_program: AccountInfo<'info>
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
            monthstr.as_ref()
            ],
        bump,
        payer=authority,
        space=128
    )]
    user_month: Account<'info, UserMonth>,
    #[account(mut)]
    authority: Signer<'info>,
    /// CHECK: We dont neeed to worry about this
    system_program: AccountInfo<'info>
}

#[derive(Accounts)]
pub struct CreatePost<'info> {
    #[account(
        init,
        payer=authority,
        space=UserPost::LEN
    )]
    post: Account<'info, UserPost>,
    #[account(mut)]
    authority: Signer<'info>,
    user_month: Account<'info, UserMonth>,
    /// CHECK: We dont neeed to worry about this
    system_program: AccountInfo<'info>

}

#[account]
pub struct User {
    authority: Pubkey,
    bump: u8,
    handle: String    
}

impl User {
    const LEN: usize = 32 + 1 + (4*30);
}
#[account]
pub struct UserMonth {
    authority: Pubkey,
    user_account: Pubkey,
    bump: u8,
    // Store year and month so I can 
    // Iterate on user posts for the year and month
    year: u16,
    month: u8,
    post_count: u16,
    posts: Vec<Pubkey>
}

#[account]
pub struct UserPost {
    authority: Pubkey, //32
    user_month: Pubkey, //32
    timestamp: u32, //4
    cid: String, // 4*59
    title: String, //4*50
}

impl UserPost {
    const LEN: usize = 32 +32 + 4 + (4*59) + (4*50);
}