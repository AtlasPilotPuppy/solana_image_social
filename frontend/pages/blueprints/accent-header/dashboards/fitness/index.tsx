import Head from 'next/head';

import AccentHeaderLayout from 'src/layouts/AccentHeaderLayout';
import { Authenticated } from 'src/components/Authenticated';

import DashboardFitnessContent from 'src/content/DashboardPages/fitness';

function DashboardFitness() {
  return (
    <>
      <Head>
        <title>Fitness Dashboard</title>
      </Head>
      <DashboardFitnessContent />
    </>
  );
}

DashboardFitness.getLayout = (page) => (
  <Authenticated>
    <AccentHeaderLayout>{page}</AccentHeaderLayout>
  </Authenticated>
);

export default DashboardFitness;
