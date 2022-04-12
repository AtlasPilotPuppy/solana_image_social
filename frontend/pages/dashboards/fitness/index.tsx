import Head from 'next/head';

import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
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
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default DashboardFitness;
