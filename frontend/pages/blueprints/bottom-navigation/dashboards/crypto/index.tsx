import Head from 'next/head';

import BottomNavigationLayout from 'src/layouts/BottomNavigationLayout';
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
    <BottomNavigationLayout>{page}</BottomNavigationLayout>
  </Authenticated>
);

export default DashboardCrypto;
