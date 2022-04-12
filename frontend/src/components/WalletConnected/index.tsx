import type { FC, ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import { Slide } from '@mui/material';
import { useAnchorWallet } from '@solana/wallet-adapter-react';

interface WalletConnectedProps {
  children: ReactNode;
}

export const WalletConnected: FC<WalletConnectedProps> = (props) => {
  const { children } = props;
  const wallet = useAnchorWallet();
  const router = useRouter();
  const [verified, setVerified] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    if (!wallet?.publicKey) {
      router.push({
        pathname: '/auth/login/cover',
        query: { backTo: router.asPath }
      });
    } else {
      setVerified(true);

      enqueueSnackbar('Wallet Sucessfullt connected!', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right'
        },
        autoHideDuration: 2000,
        TransitionComponent: Slide
      });
    }
  }, [router.isReady]);

  if (!verified) {
    return null;
  }

  return <>{children}</>;
};

WalletConnected.propTypes = {
  children: PropTypes.node
};
