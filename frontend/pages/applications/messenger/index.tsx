import Head from 'next/head';
import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';

import TopBarContent from 'src/content/Applications/Messenger/TopBarContent';
import BottomBarContent from 'src/content/Applications/Messenger/BottomBarContent';
import SidebarContent from 'src/content/Applications/Messenger/SidebarContent';
import ChatContent from 'src/content/Applications/Messenger/ChatContent';

import Scrollbar from 'src/components/Scrollbar';

import { Box, styled, Divider } from '@mui/material';

const RootWrapper = styled(Box)(
  ({ theme }) => `
       height: calc(100vh - ${theme.header.height});
       display: flex;
`
);

const Sidebar = styled(Box)(
  ({ theme }) => `
        width: 300px;
        background: ${theme.colors.alpha.white[100]};
        border-right: ${theme.colors.alpha.black[10]} solid 1px;
`
);

const ChatWindow = styled(Box)(
  () => `
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        flex: 1;
`
);

const ChatTopBar = styled(Box)(
  ({ theme }) => `
        background: ${theme.colors.alpha.white[100]};
        border-bottom: ${theme.colors.alpha.black[10]} solid 1px;
        padding: ${theme.spacing(2)};
`
);

function ApplicationsMessenger() {
  return (
    <>
      <Head>
        <title>Messenger - Applications</title>
      </Head>
      <RootWrapper className="Mui-FixedWrapper">
        <Sidebar>
          <Scrollbar>
            <SidebarContent />
          </Scrollbar>
        </Sidebar>
        <ChatWindow>
          <ChatTopBar>
            <TopBarContent />
          </ChatTopBar>
          <Box flex={1}>
            <Scrollbar>
              <ChatContent />
            </Scrollbar>
          </Box>
          <Divider />
          <BottomBarContent />
        </ChatWindow>
      </RootWrapper>
    </>
  );
}

ApplicationsMessenger.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default ApplicationsMessenger;
