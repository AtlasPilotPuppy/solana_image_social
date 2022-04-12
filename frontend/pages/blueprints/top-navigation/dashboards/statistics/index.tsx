import Head from 'next/head';

import TopNavigationLayout from 'src/layouts/TopNavigationLayout';
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
    <TopNavigationLayout>{page}</TopNavigationLayout>
  </Authenticated>
);

export default DashboardStatistics;
