import { Box, Card, Container, Button, styled } from '@mui/material';
import { ReactElement, useMemo } from 'react';
import BaseLayout from 'src/layouts/BaseLayout';

import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import Logo from 'src/components/LogoSign';
import LanguageSwitcher from 'src/layouts/BoxedSidebarLayout/Header/Buttons/LanguageSwitcher';
import Footer from 'src/components/Footer';

///
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';

import { clusterApiUrl } from '@solana/web3.js';
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Splash from '@/content/Overview/Splash';
import { IPFSConnectionProvider } from '@/contexts/IpfsContext';
import { AnchorTwoTone } from '@mui/icons-material';
import { startOfWeekYearWithOptions } from 'date-fns/fp';

import { PROGRAM_ID, network, supportedWallets } from "src/constants";
import { ProgramConnectionProvider } from '@/contexts/ProgramProvider';
// Use require instead of import since order matters
require('@solana/wallet-adapter-react-ui/styles.css');
///

const HeaderWrapper = styled(Card)(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  height: ${theme.spacing(10)};
  margin-bottom: ${theme.spacing(10)};
`
);

const OverviewWrapper = styled(Box)(
  ({ theme }) => `
    overflow: auto;
    background: ${theme.palette.common.white};
    flex: 1;
    overflow-x: hidden;
`
);

function Overview() {
  const { t }: { t: any } = useTranslation();



  // You can also provide a custom RPC endpoint
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded
  const wallets = useMemo(
      () => supportedWallets,
      [network]
  );
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>      
      <IPFSConnectionProvider>

      <WalletModalProvider>
      <ProgramConnectionProvider programId={PROGRAM_ID} >
    <OverviewWrapper>
      <Head>
        <title>P2P Image Share</title>
      </Head>
      <HeaderWrapper>
        <Container maxWidth="lg">
          <Box display="flex" alignItems="center">
            <Logo />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              flex={1}
            >
              <Box />
              <Box>
                <LanguageSwitcher />
                </Box>
                <Box>
                    <WalletMultiButton />
                    </Box>
                    <Box>
                    <WalletDisconnectButton />
                    </Box>
              </Box>
            </Box>
        </Container>
      </HeaderWrapper>
      <Splash />
      <Footer />
    </OverviewWrapper>
    </ProgramConnectionProvider>
    </WalletModalProvider>
    </IPFSConnectionProvider>
    </WalletProvider>    
    </ConnectionProvider>
  );
}

export default Overview;

Overview.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>;
};
