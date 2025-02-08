import React, { useMemo } from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { CoinbaseWalletAdapter, LedgerWalletAdapter, PhantomWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter, TrustWalletAdapter } from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

import "@solana/wallet-adapter-react-ui/styles.css"; // Import default styles

const WalletContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const network = clusterApiUrl("devnet"); // Use 'mainnet-beta' for production

    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            new SolflareWalletAdapter(),
            new TrustWalletAdapter(),
            new TorusWalletAdapter(),
            new LedgerWalletAdapter(),
            new CoinbaseWalletAdapter()
        ],
        []
    );

    return (
        <ConnectionProvider endpoint={network}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default WalletContextProvider;