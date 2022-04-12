import Head from 'next/head';

import AccentHeaderLayout from 'src/layouts/AccentHeaderLayout';
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
    <AccentHeaderLayout>{page}</AccentHeaderLayout>
  </Authenticated>
);

export default DashboardCrypto;
