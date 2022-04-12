import Head from 'next/head';

import BoxedSidebarLayout from 'src/layouts/BoxedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';

import DashboardMonitoringContent from 'src/content/DashboardPages/monitoring';

function DashboardMonitoring() {
  return (
    <>
      <Head>
        <title>Monitoring Dashboard</title>
      </Head>
      <DashboardMonitoringContent />
    </>
  );
}

DashboardMonitoring.getLayout = (page) => (
  <Authenticated>
    <BoxedSidebarLayout>{page}</BoxedSidebarLayout>
  </Authenticated>
);

export default DashboardMonitoring;
