import Head from 'next/head';

import BoxedSidebarLayout from 'src/layouts/BoxedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';

import DashboardStatisticsContent from 'src/content/DashboardPages/statistics';

function DashboardStatistics() {
  return (
    <>
      <Head>
        <title>Statistics Dashboard</title>
      </Head>
      <DashboardStatisticsContent />
    </>
  );
}

DashboardStatistics.getLayout = (page) => (
  <Authenticated>
    <BoxedSidebarLayout>{page}</BoxedSidebarLayout>
  </Authenticated>
);

export default DashboardStatistics;
