import Head from 'next/head';

import { Authenticated } from 'src/components/Authenticated';
import AccentSidebarLayout from 'src/layouts/AccentSidebarLayout';

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
    <AccentSidebarLayout>{page}</AccentSidebarLayout>
  </Authenticated>
);

export default DashboardAutomation;
