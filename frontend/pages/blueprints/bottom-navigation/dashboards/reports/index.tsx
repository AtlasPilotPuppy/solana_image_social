import Head from 'next/head';

import BottomNavigationLayout from 'src/layouts/BottomNavigationLayout';
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
    <BottomNavigationLayout>{page}</BottomNavigationLayout>
  </Authenticated>
);

export default DashboardReports;
