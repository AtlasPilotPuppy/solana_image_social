import Head from 'next/head';

import { Authenticated } from 'src/components/Authenticated';
import BoxedSidebarLayout from 'src/layouts/BoxedSidebarLayout';

import DashboardCommerceContent from 'src/content/DashboardPages/commerce';

function DashboardCommerce() {
  return (
    <>
      <Head>
        <title>Commerce Dashboard</title>
      </Head>
      <DashboardCommerceContent />
    </>
  );
}

DashboardCommerce.getLayout = (page) => (
  <Authenticated>
    <BoxedSidebarLayout>{page}</BoxedSidebarLayout>
  </Authenticated>
);

export default DashboardCommerce;
