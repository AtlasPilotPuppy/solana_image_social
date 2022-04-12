import Head from 'next/head';

import AccentHeaderLayout from 'src/layouts/AccentHeaderLayout';
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
    <AccentHeaderLayout>{page}</AccentHeaderLayout>
  </Authenticated>
);

export default DashboardStatistics;
