import Head from 'next/head';

import { Authenticated } from 'src/components/Authenticated';
import CollapsedSidebarLayout from 'src/layouts/CollapsedSidebarLayout';

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
    <CollapsedSidebarLayout>{page}</CollapsedSidebarLayout>
  </Authenticated>
);

export default DashboardBanking;
