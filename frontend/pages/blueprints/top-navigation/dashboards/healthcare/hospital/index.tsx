import Head from 'next/head';

import TopNavigationLayout from 'src/layouts/TopNavigationLayout';
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
    <TopNavigationLayout>{page}</TopNavigationLayout>
  </Authenticated>
);

export default DashboardHospitalView;
