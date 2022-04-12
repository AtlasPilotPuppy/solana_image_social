import Head from 'next/head';

import { Authenticated } from 'src/components/Authenticated';
import AccentHeaderLayout from 'src/layouts/AccentHeaderLayout';

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
    <AccentHeaderLayout>{page}</AccentHeaderLayout>
  </Authenticated>
);

export default DashboardBanking;
