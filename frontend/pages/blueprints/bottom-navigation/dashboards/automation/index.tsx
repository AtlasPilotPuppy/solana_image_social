import Head from 'next/head';

import { Authenticated } from 'src/components/Authenticated';
import BottomNavigationLayout from 'src/layouts/BottomNavigationLayout';

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
    <BottomNavigationLayout>{page}</BottomNavigationLayout>
  </Authenticated>
);

export default DashboardAutomation;
