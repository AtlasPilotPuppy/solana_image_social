import Head from 'next/head';

import CollapsedSidebarLayout from 'src/layouts/CollapsedSidebarLayout';
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
    <CollapsedSidebarLayout>{page}</CollapsedSidebarLayout>
  </Authenticated>
);

export default DashboardCrypto;
