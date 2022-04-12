import Head from 'next/head';

import AccentHeaderLayout from 'src/layouts/AccentHeaderLayout';
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
    <AccentHeaderLayout>{page}</AccentHeaderLayout>
  </Authenticated>
);

export default DashboardHospitalView;
