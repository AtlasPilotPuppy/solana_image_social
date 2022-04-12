import Head from 'next/head';

import TopNavigationLayout from 'src/layouts/TopNavigationLayout';
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
    <TopNavigationLayout>{page}</TopNavigationLayout>
  </Authenticated>
);

export default DashboardFitness;
