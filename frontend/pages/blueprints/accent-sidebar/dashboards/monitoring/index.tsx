import Head from 'next/head';

import AccentSidebarLayout from 'src/layouts/AccentSidebarLayout';
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
    <AccentSidebarLayout>{page}</AccentSidebarLayout>
  </Authenticated>
);

export default DashboardMonitoring;
