import Head from 'next/head';

import { Authenticated } from 'src/components/Authenticated';
import BoxedSidebarLayout from 'src/layouts/BoxedSidebarLayout';

import DashboardBankingContent from 'src/content/DashboardPages/banking';

function DashboardBanking() {
  return (
    <>
      <Head>
        <title>Banking Dashboard</title>
      </Head>
      <DashboardBankingContent />
    </>
  );
}

DashboardBanking.getLayout = (page) => (
  <Authenticated>
    <BoxedSidebarLayout>{page}</BoxedSidebarLayout>
  </Authenticated>
);

export default DashboardBanking;
