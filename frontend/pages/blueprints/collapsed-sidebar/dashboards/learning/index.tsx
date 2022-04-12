import Head from 'next/head';

import CollapsedSidebarLayout from 'src/layouts/CollapsedSidebarLayout';
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
    <CollapsedSidebarLayout>{page}</CollapsedSidebarLayout>
  </Authenticated>
);

export default DashboardLearning;
