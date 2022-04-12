import Head from 'next/head';

import { Authenticated } from 'src/components/Authenticated';
import TopNavigationLayout from 'src/layouts/TopNavigationLayout';

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
    <TopNavigationLayout>{page}</TopNavigationLayout>
  </Authenticated>
);

export default DashboardAutomation;
