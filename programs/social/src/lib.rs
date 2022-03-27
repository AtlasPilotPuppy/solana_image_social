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

    pub fn create_user_month(
        ctx: Context<InitializeUserMonth>, 
        _yearstr:String,
        _monthstr:String,
        user_month: UserMonth
    ) -> Result<()> {
        ctx.accounts.user_month.set_inner(user_month);
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
    bump: u8,
    year: u16,
    month: u8
}
