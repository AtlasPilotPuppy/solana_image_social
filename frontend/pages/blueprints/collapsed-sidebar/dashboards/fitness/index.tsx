import Head from 'next/head';

import CollapsedSidebarLayout from 'src/layouts/CollapsedSidebarLayout';
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
    <CollapsedSidebarLayout>{page}</CollapsedSidebarLayout>
  </Authenticated>
);

export default DashboardFitness;
