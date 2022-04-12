import Head from 'next/head';

import { Authenticated } from 'src/components/Authenticated';
import AccentHeaderLayout from 'src/layouts/AccentHeaderLayout';

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
    <AccentHeaderLayout>{page}</AccentHeaderLayout>
  </Authenticated>
);

export default DashboardAutomation;
