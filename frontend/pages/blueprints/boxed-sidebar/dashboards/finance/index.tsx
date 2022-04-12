import Head from 'next/head';

import BoxedSidebarLayout from 'src/layouts/BoxedSidebarLayout';
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
    <BoxedSidebarLayout>{page}</BoxedSidebarLayout>
  </Authenticated>
);

export default DashboardFinance;
