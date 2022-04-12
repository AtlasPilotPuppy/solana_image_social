import Head from 'next/head';

import { Authenticated } from 'src/components/Authenticated';
import BottomNavigationLayout from 'src/layouts/BottomNavigationLayout';

import DashboardAnalyticsContent from 'src/content/DashboardPages/analytics';

function DashboardAnalytics() {
  return (
    <>
      <Head>
        <title>Analytics Dashboard</title>
      </Head>
      <DashboardAnalyticsContent />
    </>
  );
}

DashboardAnalytics.getLayout = (page) => (
  <Authenticated>
    <BottomNavigationLayout>{page}</BottomNavigationLayout>
  </Authenticated>
);

export default DashboardAnalytics;
