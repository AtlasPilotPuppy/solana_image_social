import { useState } from 'react';

import Scrollbar from 'src/components/Scrollbar';

import PageHeader from 'src/content/Dashboards/Helpdesk/PageHeader';

import { Box, Drawer, Grid, useTheme, IconButton, styled } from '@mui/material';

import HelpdeskSidebar from 'src/content/Dashboards/Helpdesk/HelpdeskSidebar';
import UnresolvedTickets from 'src/content/Dashboards/Helpdesk/UnresolvedTickets';
import PendingQuestions from 'src/content/Dashboards/Helpdesk/PendingQuestions';
import UpdatedTickets from 'src/content/Dashboards/Helpdesk/UpdatedTickets';
import AssignedTasks from 'src/content/Dashboards/Helpdesk/AssignedTasks';
import PendingTickets from 'src/content/Dashboards/Helpdesk/PendingTickets';
import RecentQuestions from 'src/content/Dashboards/Helpdesk/RecentQuestions';
import TopAgentsHeading from 'src/content/Dashboards/Helpdesk/TopAgentsHeading';
import TopAgents1 from 'src/content/Dashboards/Helpdesk/TopAgents1';
import TopAgents2 from 'src/content/Dashboards/Helpdesk/TopAgents2';

import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';

const DrawerWrapper = styled(Drawer)(
  ({ theme }) => `
    width: 360px;
    flex-shrink: 0;
    z-index: 3;

    & > .MuiPaper-root {
        width: 360px;
        height: calc(100% - ${theme.header.height});
        position: absolute;
        top: ${theme.header.height};
        right: 0;
        z-index: 3;
        background: ${theme.colors.alpha.white[100]};
    }
`
);

const DrawerWrapperMobile = styled(Drawer)(
  () => `
    width: 340px;
    flex-shrink: 0;

  & > .MuiPaper-root {
        width: 340px;
        z-index: 3;
  }
`
);

const MainContentWrapper = styled(Box)(
  () => `
  flex-grow: 1;
`
);

const IconButtonToggle = styled(IconButton)(
  ({ theme }) => `
  width: ${theme.spacing(6)};
  height: ${theme.spacing(6)};
`
);

function DashboardHelpdeskContent() {
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const sidebarContent = (
    <Scrollbar>
      <HelpdeskSidebar />
    </Scrollbar>
  );

  return (
    <Box
      sx={{
        width: { xs: '100%', lg: 'calc(100% - 360px)' }
      }}
    >
      <MainContentWrapper>
        <Grid
          sx={{
            px: 4
          }}
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box mt={3}>
                <PageHeader />
              </Box>
              <IconButtonToggle
                sx={{
                  display: { lg: 'none', xs: 'inline-block' }
                }}
                color="primary"
                onClick={handleDrawerToggle}
                size="small"
              >
                <MenuTwoToneIcon />
              </IconButtonToggle>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <UnresolvedTickets />
              </Grid>
              <Grid item xs={12} md={6}>
                <PendingQuestions />
              </Grid>
              <Grid item xs={12} md={6}>
                <UpdatedTickets />
              </Grid>
              <Grid item xs={12} md={6}>
                <AssignedTasks />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <PendingTickets />
          </Grid>
          <Grid item xs={12}>
            <RecentQuestions />
          </Grid>
          <Grid item xs={12}>
            <TopAgentsHeading />
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <TopAgents1 />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TopAgents2 />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box mt={3} />
      </MainContentWrapper>
      <DrawerWrapperMobile
        sx={{
          display: { lg: 'none', xs: 'inline-block' }
        }}
        variant="temporary"
        anchor={theme.direction === 'rtl' ? 'left' : 'right'}
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        {sidebarContent}
      </DrawerWrapperMobile>
      <DrawerWrapper
        sx={{
          display: { xs: 'none', lg: 'inline-block' }
        }}
        className="MuiDrawer-hd"
        variant="permanent"
        anchor={theme.direction === 'rtl' ? 'left' : 'right'}
        open
      >
        {sidebarContent}
      </DrawerWrapper>
    </Box>
  );
}

export default DashboardHelpdeskContent;
