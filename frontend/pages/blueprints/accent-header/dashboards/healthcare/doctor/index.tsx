import Head from 'next/head';

import AccentHeaderLayout from 'src/layouts/AccentHeaderLayout';
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
    <AccentHeaderLayout>{page}</AccentHeaderLayout>
  </Authenticated>
);

export default DashboardHealthcare;
