import Head from 'next/head';

import AccentHeaderLayout from 'src/layouts/AccentHeaderLayout';
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
    <AccentHeaderLayout>{page}</AccentHeaderLayout>
  </Authenticated>
);

export default DashboardReports;
