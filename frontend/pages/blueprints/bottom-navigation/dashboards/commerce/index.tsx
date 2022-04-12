import Head from 'next/head';

import { Authenticated } from 'src/components/Authenticated';
import BottomNavigationLayout from 'src/layouts/BottomNavigationLayout';

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
    <BottomNavigationLayout>{page}</BottomNavigationLayout>
  </Authenticated>
);

export default DashboardCommerce;
