import Head from 'next/head';

import TopNavigationLayout from 'src/layouts/TopNavigationLayout';
import { Authenticated } from 'src/components/Authenticated';

import DashboardCryptoContent from 'src/content/DashboardPages/crypto';

function DashboardCrypto() {
  return (
    <>
      <Head>
        <title>Crypto Dashboard</title>
      </Head>
      <DashboardCryptoContent />
    </>
  );
}

DashboardCrypto.getLayout = (page) => (
  <Authenticated>
    <TopNavigationLayout>{page}</TopNavigationLayout>
  </Authenticated>
);

export default DashboardCrypto;
