import Head from 'next/head';

import BoxedSidebarLayout from 'src/layouts/BoxedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';

import DashboardHealthcareContent from 'src/content/DashboardPages/healthcare/doctor';

function DashboardHealthcare() {
  return (
    <>
      <Head>
        <title>Healthcare Dashboard - Doctor Overview</title>
      </Head>
      <DashboardHealthcareContent />
    </>
  );
}

DashboardHealthcare.getLayout = (page) => (
  <Authenticated>
    <BoxedSidebarLayout>{page}</BoxedSidebarLayout>
  </Authenticated>
);

export default DashboardHealthcare;
