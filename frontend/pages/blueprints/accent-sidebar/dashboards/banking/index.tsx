import Head from 'next/head';

import { Authenticated } from 'src/components/Authenticated';
import AccentSidebarLayout from 'src/layouts/AccentSidebarLayout';

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
    <AccentSidebarLayout>{page}</AccentSidebarLayout>
  </Authenticated>
);

export default DashboardBanking;
