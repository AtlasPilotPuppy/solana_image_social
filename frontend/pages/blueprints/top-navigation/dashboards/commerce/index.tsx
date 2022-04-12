import Head from 'next/head';

import { Authenticated } from 'src/components/Authenticated';
import TopNavigationLayout from 'src/layouts/TopNavigationLayout';

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
    <TopNavigationLayout>{page}</TopNavigationLayout>
  </Authenticated>
);

export default DashboardCommerce;
