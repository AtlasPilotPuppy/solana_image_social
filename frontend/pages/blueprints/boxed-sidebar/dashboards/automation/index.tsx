import Head from 'next/head';

import { Authenticated } from 'src/components/Authenticated';
import BoxedSidebarLayout from 'src/layouts/BoxedSidebarLayout';

import DashboardAutomationContent from 'src/content/DashboardPages/automation';

function DashboardAutomation() {
  return (
    <>
      <Head>
        <title>Automation Dashboard</title>
      </Head>
      <DashboardAutomationContent />
    </>
  );
}

DashboardAutomation.getLayout = (page) => (
  <Authenticated>
    <BoxedSidebarLayout>{page}</BoxedSidebarLayout>
  </Authenticated>
);

export default DashboardAutomation;
