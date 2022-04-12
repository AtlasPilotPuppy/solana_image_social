import Head from 'next/head';

import { Authenticated } from 'src/components/Authenticated';
import BottomNavigationLayout from 'src/layouts/BottomNavigationLayout';

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
    <BottomNavigationLayout>{page}</BottomNavigationLayout>
  </Authenticated>
);

export default DashboardBanking;
