import { useEffect, useRef } from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';

import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'src/store';

import {
  Box,
  Grid,
  Divider,
  IconButton,
  styled,
  useTheme
} from '@mui/material';
import { MailboxResults } from 'src/content/Applications/Mailbox/Results';
import { MailboxSingle } from 'src/content/Applications/Mailbox/Single';
import { MailboxSidebar } from 'src/content/Applications/Mailbox/Sidebar';
import { getTags, openSidebar, closeSidebar } from 'src/slices/mailbox';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';

const MainContentWrapper = styled(Box)(
  ({ theme }) => `
  flex-grow: 1;
  min-height: 100%;
  background: ${theme.colors.alpha.white[100]};
`
);

const IconButtonToggle = styled(IconButton)(
  ({ theme }) => `
  width: ${theme.spacing(6)};
  height: ${theme.spacing(6)};
`
);

const ApplicationsMailbox: NextPage = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const router = useRouter();
  const { tags, sidebarOpen } = useSelector((state) => state.mailbox);

  const pageRef = useRef<HTMLDivElement | null>(null);

  const mailId = router.query.mailId as string;
  const tag = router.query.tag as string;

  useEffect(() => {
    dispatch(getTags());
  }, [dispatch]);

  const handleDrawerToggle = (): void => {
    if (sidebarOpen) {
      dispatch(closeSidebar());
    } else {
      dispatch(openSidebar());
    }
  };

  const handleCloseSidebar = () => {
    dispatch(closeSidebar());
  };

  return (
    <>
      <Head>
        <title>Mailbox - Applications</title>
      </Head>
      <Box
        ref={pageRef}
        className="Mui-FixedWrapper"
        sx={{
          minHeight: `calc(100vh - ${theme.header.height} )`
        }}
        display="flex"
      >
        <MailboxSidebar
          tag={tag}
          onClose={handleCloseSidebar}
          open={sidebarOpen}
          tags={tags}
        />
        <MainContentWrapper>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={4}
          >
            <Grid
              item
              xs={12}
              sx={{
                display: { lg: 'none', xs: 'inline-block' }
              }}
            >
              <Box
                display="flex"
                p={1}
                alignItems="center"
                justifyContent="space-between"
              >
                <IconButtonToggle
                  color="primary"
                  onClick={handleDrawerToggle}
                  size="small"
                >
                  <MenuTwoToneIcon />
                </IconButtonToggle>
              </Box>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Box className="Mui-FixedWrapperContent">
                {mailId ? (
                  <MailboxSingle tag={tag} mailId={mailId} />
                ) : (
                  <MailboxResults
                    toggleSidebar={handleDrawerToggle}
                    tag={tag}
                  />
                )}
              </Box>
            </Grid>
          </Grid>
        </MainContentWrapper>
      </Box>
    </>
  );
};

ApplicationsMailbox.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default ApplicationsMailbox;
