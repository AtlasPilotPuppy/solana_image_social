import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { PhantomWalletAdapter, SlopeWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter, LedgerWalletAdapter, SolletWalletAdapter, SolletExtensionWalletAdapter } from "@solana/wallet-adapter-wallets";

export const PROGRAM_ID = "7p8C6xyHkFbexknPCjm1KbGmVgd1mbP4GRPKt7q9HLbn";
export const network = WalletAdapterNetwork.Devnet;

export const supportedWallets = [
    new PhantomWalletAdapter(),
    new SlopeWalletAdapter(),
    new SolflareWalletAdapter({ network }),
    new TorusWalletAdapter(),
    new LedgerWalletAdapter(),
    new SolletWalletAdapter({ network }),
    new SolletExtensionWalletAdapter({ network }),
]