import Head from 'next/head';

import { Authenticated } from 'src/components/Authenticated';
import AccentHeaderLayout from 'src/layouts/AccentHeaderLayout';

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
    <AccentHeaderLayout>{page}</AccentHeaderLayout>
  </Authenticated>
);

export default DashboardAnalytics;
