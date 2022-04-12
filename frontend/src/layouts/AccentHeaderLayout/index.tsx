import { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Box, useTheme } from '@mui/material';
import ThemeSettings from 'src/components/ThemeSettings';

import Sidebar from './Sidebar';
import Header from './Header';

interface AccentHeaderLayoutProps {
  children?: ReactNode;
}

const AccentHeaderLayout: FC<AccentHeaderLayoutProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      <Header />
      <Sidebar />
      <Box
        sx={{
          position: 'relative',
          zIndex: 5,
          flex: 1,
          display: 'flex',
          pt: `${theme.header.height}`,
          [theme.breakpoints.up('lg')]: {
            pl: `${theme.sidebar.width}`
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            width: '100%'
          }}
        >
          <Box flexGrow={1}>{children}</Box>
        </Box>
      </Box>
      <ThemeSettings />
    </>
  );
};

AccentHeaderLayout.propTypes = {
  children: PropTypes.node
};

export default AccentHeaderLayout;
