import Head from 'next/head';

import CollapsedSidebarLayout from 'src/layouts/CollapsedSidebarLayout';
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
    <CollapsedSidebarLayout>{page}</CollapsedSidebarLayout>
  </Authenticated>
);

export default DashboardMonitoring;
