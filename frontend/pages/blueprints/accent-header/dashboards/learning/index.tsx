import Head from 'next/head';

import AccentHeaderLayout from 'src/layouts/AccentHeaderLayout';
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
    <AccentHeaderLayout>{page}</AccentHeaderLayout>
  </Authenticated>
);

export default DashboardLearning;
