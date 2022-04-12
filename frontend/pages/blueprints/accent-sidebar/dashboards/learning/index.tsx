import Head from 'next/head';

import AccentSidebarLayout from 'src/layouts/AccentSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';

import DashboardLearningContent from 'src/content/DashboardPages/learning';

function DashboardLearning() {
  return (
    <>
      <Head>
        <title>Learning Dashboard</title>
      </Head>
      <DashboardLearningContent />
    </>
  );
}

DashboardLearning.getLayout = (page) => (
  <Authenticated>
    <AccentSidebarLayout>{page}</AccentSidebarLayout>
  </Authenticated>
);

export default DashboardLearning;
