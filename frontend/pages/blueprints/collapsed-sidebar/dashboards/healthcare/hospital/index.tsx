import Head from 'next/head';

import CollapsedSidebarLayout from 'src/layouts/CollapsedSidebarLayout';
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
    <CollapsedSidebarLayout>{page}</CollapsedSidebarLayout>
  </Authenticated>
);

export default DashboardHospitalView;
