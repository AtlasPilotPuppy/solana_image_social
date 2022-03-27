# Solana IPFS Image Social

Attempt to create a way for users to share images/videos with record keepign on Solana.
The media will be stored on IPFS.
I am planning to use Proxy Re-encryption to allow users to have the option of *locked* media which can only be unlocked by the owner for the specific user.

# Solana Program
So far the solana program has the data layer.

## Use of PDA's
We rely heavily in the usage of Program Derived Accounts to essentually build 
Hash Maps to allow us to find information rapidly.
