import Head from 'next/head';

import AccentHeaderLayout from 'src/layouts/AccentHeaderLayout';
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
    <AccentHeaderLayout>{page}</AccentHeaderLayout>
  </Authenticated>
);

export default DashboardProducts;
