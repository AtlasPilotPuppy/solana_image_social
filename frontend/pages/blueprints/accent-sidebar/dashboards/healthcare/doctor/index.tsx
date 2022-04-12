import Head from 'next/head';

import AccentSidebarLayout from 'src/layouts/AccentSidebarLayout';
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
    <AccentSidebarLayout>{page}</AccentSidebarLayout>
  </Authenticated>
);

export default DashboardHealthcare;
