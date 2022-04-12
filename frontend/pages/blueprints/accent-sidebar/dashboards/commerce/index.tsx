import Head from 'next/head';

import { Authenticated } from 'src/components/Authenticated';
import AccentSidebarLayout from 'src/layouts/AccentSidebarLayout';

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
    <AccentSidebarLayout>{page}</AccentSidebarLayout>
  </Authenticated>
);

export default DashboardCommerce;
