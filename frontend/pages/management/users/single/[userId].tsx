import { useState, useCallback, ChangeEvent, useEffect } from 'react';

import Head from 'next/head';

import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';

import Footer from 'src/components/Footer';

import { Box, Tabs, Tab, Grid, styled } from '@mui/material';

import type { User } from 'src/models/user';
import { usersApi } from 'src/mocks/users';

import { useRefMounted } from 'src/hooks/useRefMounted';
import { useTranslation } from 'react-i18next';

import ProfileCover from 'src/content/Management/Users/single/ProfileCover';
import RecentActivity from 'src/content/Management/Users/single/RecentActivity';
import Feed from 'src/content/Management/Users/single/Feed';
import PopularTags from 'src/content/Management/Users/single/PopularTags';
import MyCards from 'src/content/Management/Users/single/MyCards';
import Addresses from 'src/content/Management/Users/single/Addresses';
import ActivityTab from 'src/content/Management/Users/single/ActivityTab';
import EditProfileTab from 'src/content/Management/Users/single/EditProfileTab';
import NotificationsTab from 'src/content/Management/Users/single/NotificationsTab';
import SecurityTab from 'src/content/Management/Users/single/SecurityTab';

const TabsWrapper = styled(Tabs)(
  () => `
    .MuiTabs-scrollableX {
      overflow-x: auto !important;
    }
`
);

function ManagementUsersView() {
  const isMountedRef = useRefMounted();
  const [user, setUser] = useState<User | null>(null);
  const { t }: { t: any } = useTranslation();

  const [currentTab, setCurrentTab] = useState<string>('activity');

  const tabs = [
    { value: 'activity', label: t('Activity') },
    { value: 'edit_profile', label: t('Edit Profile') },
    { value: 'notifications', label: t('Notifications') },
    { value: 'security', label: t('Passwords/Security') }
  ];

  const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  const getUser = useCallback(async () => {
    try {
      const response = await usersApi.getUser();

      if (isMountedRef()) {
        setUser(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  if (!user) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{user.name} - Profile Details</title>
      </Head>
      <Box sx={{ mt: 3 }}>
        <Grid
          sx={{ px: 4 }}
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} md={8}>
            <ProfileCover user={user} />
          </Grid>
          <Grid item xs={12} md={4}>
            <RecentActivity />
          </Grid>
          <Grid item xs={12} md={8}>
            <Feed />
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularTags />
          </Grid>
          <Grid item xs={12} md={7}>
            <MyCards />
          </Grid>
          <Grid item xs={12} md={5}>
            <Addresses />
          </Grid>
          <Grid item xs={12}>
            <TabsWrapper
              onChange={handleTabsChange}
              value={currentTab}
              variant="scrollable"
              scrollButtons="auto"
              textColor="primary"
              indicatorColor="primary"
            >
              {tabs.map((tab) => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              ))}
            </TabsWrapper>
          </Grid>
          <Grid item xs={12}>
            {currentTab === 'activity' && <ActivityTab />}
            {currentTab === 'edit_profile' && <EditProfileTab />}
            {currentTab === 'notifications' && <NotificationsTab />}
            {currentTab === 'security' && <SecurityTab />}
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

ManagementUsersView.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default ManagementUsersView;
