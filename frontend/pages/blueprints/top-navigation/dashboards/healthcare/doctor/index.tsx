import Head from 'next/head';

import TopNavigationLayout from 'src/layouts/TopNavigationLayout';
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
    <TopNavigationLayout>{page}</TopNavigationLayout>
  </Authenticated>
);

export default DashboardHealthcare;
