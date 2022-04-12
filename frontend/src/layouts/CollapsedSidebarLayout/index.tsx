import { FC, ReactNode } from 'react';
import { Box, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

import Sidebar from './Sidebar';
import Header from './Header';

import ThemeSettings from 'src/components/ThemeSettings';

interface CollapsedSidebarLayoutProps {
  children?: ReactNode;
}

const CollapsedSidebarLayout: FC<CollapsedSidebarLayoutProps> = ({
  children
}) => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          flex: 1,
          height: '100%',

          '.Mui-FixedWrapper': {
            '.MuiDrawer-root.MuiDrawer-docked': {
              '.MuiPaper-root': {
                left: 108
              }
            }
          }
        }}
      >
        <Header />
        <Sidebar />
        <Box
          sx={{
            position: 'relative',
            zIndex: 5,
            display: 'block',
            flex: 1,
            pt: `${theme.header.height}`,
            [theme.breakpoints.up('md')]: {
              ml: theme.spacing(12)
            }
          }}
        >
          <Box display="block">{children}</Box>
          <ThemeSettings />
        </Box>
      </Box>
    </>
  );
};

CollapsedSidebarLayout.propTypes = {
  children: PropTypes.node
};

export default CollapsedSidebarLayout;
