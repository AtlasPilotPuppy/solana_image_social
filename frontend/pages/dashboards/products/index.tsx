import Head from 'next/head';

import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';

import DashboardProductsContent from 'src/content/DashboardPages/products';

function DashboardProducts() {
  return (
    <>
      <Head>
        <title>Products Dashboard</title>
      </Head>
      <DashboardProductsContent />
    </>
  );
}

DashboardProducts.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default DashboardProducts;
