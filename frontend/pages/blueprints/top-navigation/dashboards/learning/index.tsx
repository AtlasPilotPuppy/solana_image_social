import Head from 'next/head';

import TopNavigationLayout from 'src/layouts/TopNavigationLayout';
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
    <TopNavigationLayout>{page}</TopNavigationLayout>
  </Authenticated>
);

export default DashboardLearning;
