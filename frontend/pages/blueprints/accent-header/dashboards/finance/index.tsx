import Head from 'next/head';

import AccentHeaderLayout from 'src/layouts/AccentHeaderLayout';
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
    <AccentHeaderLayout>{page}</AccentHeaderLayout>
  </Authenticated>
);

export default DashboardFinance;
