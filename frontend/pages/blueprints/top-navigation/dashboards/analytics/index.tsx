import Head from 'next/head';

import { Authenticated } from 'src/components/Authenticated';
import TopNavigationLayout from 'src/layouts/TopNavigationLayout';

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
    <TopNavigationLayout>{page}</TopNavigationLayout>
  </Authenticated>
);

export default DashboardAnalytics;
