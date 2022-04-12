import Head from 'next/head';

import { Authenticated } from 'src/components/Authenticated';
import AccentSidebarLayout from 'src/layouts/AccentSidebarLayout';

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
    <AccentSidebarLayout>{page}</AccentSidebarLayout>
  </Authenticated>
);

export default DashboardAnalytics;
