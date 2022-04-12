import Head from 'next/head';

import TopNavigationLayout from 'src/layouts/TopNavigationLayout';
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
    <TopNavigationLayout>{page}</TopNavigationLayout>
  </Authenticated>
);

export default DashboardProducts;
