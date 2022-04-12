import type { FC, ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useAuth } from 'src/hooks/useAuth';
import { useSnackbar } from 'notistack';
import { Slide } from '@mui/material';

interface AuthenticatedProps {
  children: ReactNode;
}

export const Authenticated: FC<AuthenticatedProps> = (props) => {
  const { children } = props;
  const auth = useAuth();
  const router = useRouter();
  const [verified, setVerified] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    if (!auth.isAuthenticated) {
      router.push({
        pathname: '/auth/login/cover',
        query: { backTo: router.asPath }
      });
    } else {
      setVerified(true);

      enqueueSnackbar('You are successfully authenticated!', {
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

Authenticated.propTypes = {
  children: PropTypes.node
};
