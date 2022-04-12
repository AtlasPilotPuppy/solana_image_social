import Head from 'next/head';

import CollapsedSidebarLayout from 'src/layouts/CollapsedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';

import DashboardFinanceContent from 'src/content/DashboardPages/finance';

function DashboardFinance() {
  return (
    <>
      <Head>
        <title>Finance Dashboard</title>
      </Head>
      <DashboardFinanceContent />
    </>
  );
}

DashboardFinance.getLayout = (page) => (
  <Authenticated>
    <CollapsedSidebarLayout>{page}</CollapsedSidebarLayout>
  </Authenticated>
);

export default DashboardFinance;
