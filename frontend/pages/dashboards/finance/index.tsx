import Head from 'next/head';

import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
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
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default DashboardFinance;
