import Head from 'next/head';

import TopNavigationLayout from 'src/layouts/TopNavigationLayout';
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
    <TopNavigationLayout>{page}</TopNavigationLayout>
  </Authenticated>
);

export default DashboardMonitoring;
