import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { PhantomWalletAdapter, SlopeWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter, LedgerWalletAdapter, SolletWalletAdapter, SolletExtensionWalletAdapter } from "@solana/wallet-adapter-wallets";

export const PROGRAM_ID = "6yT4AFpityTwxz7AdVrSJTckGyPyrXL8MKuutmBbDTnj";
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