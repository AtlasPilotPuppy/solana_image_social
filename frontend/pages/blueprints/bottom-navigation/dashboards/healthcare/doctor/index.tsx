import Head from 'next/head';

import BottomNavigationLayout from 'src/layouts/BottomNavigationLayout';
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
    <BottomNavigationLayout>{page}</BottomNavigationLayout>
  </Authenticated>
);

export default DashboardHealthcare;
