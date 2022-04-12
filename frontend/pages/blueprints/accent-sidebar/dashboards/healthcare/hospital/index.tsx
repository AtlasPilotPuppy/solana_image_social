import Head from 'next/head';

import AccentSidebarLayout from 'src/layouts/AccentSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';

import DashboardHospitalViewContent from 'src/content/DashboardPages/healthcare/hospital';

function DashboardHospitalView() {
  return (
    <>
      <Head>
        <title>Healthcare Dashboard - Hospital Management</title>
      </Head>
      <DashboardHospitalViewContent />
    </>
  );
}

DashboardHospitalView.getLayout = (page) => (
  <Authenticated>
    <AccentSidebarLayout>{page}</AccentSidebarLayout>
  </Authenticated>
);

export default DashboardHospitalView;
