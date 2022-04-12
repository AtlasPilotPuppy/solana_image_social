import Head from 'next/head';

import TopNavigationLayout from 'src/layouts/TopNavigationLayout';
import { Authenticated } from 'src/components/Authenticated';

import DashboardReportsContent from 'src/content/DashboardPages/reports';

function DashboardReports() {
  return (
    <>
      <Head>
        <title>Reports Dashboard</title>
      </Head>
      <DashboardReportsContent />
    </>
  );
}

DashboardReports.getLayout = (page) => (
  <Authenticated>
    <TopNavigationLayout>{page}</TopNavigationLayout>
  </Authenticated>
);

export default DashboardReports;
