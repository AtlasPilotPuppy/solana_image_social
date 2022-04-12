import Head from 'next/head';

import TopNavigationLayout from 'src/layouts/TopNavigationLayout';
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
    <TopNavigationLayout>{page}</TopNavigationLayout>
  </Authenticated>
);

export default DashboardFinance;
