import Head from 'next/head';

import { Authenticated } from 'src/components/Authenticated';
import BoxedSidebarLayout from 'src/layouts/BoxedSidebarLayout';

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
    <BoxedSidebarLayout>{page}</BoxedSidebarLayout>
  </Authenticated>
);

export default DashboardAnalytics;
