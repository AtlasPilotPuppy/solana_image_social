import Head from 'next/head';

import { Authenticated } from 'src/components/Authenticated';
import AccentHeaderLayout from 'src/layouts/AccentHeaderLayout';

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
    <AccentHeaderLayout>{page}</AccentHeaderLayout>
  </Authenticated>
);

export default DashboardCommerce;
