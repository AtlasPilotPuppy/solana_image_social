import Head from 'next/head';

import BottomNavigationLayout from 'src/layouts/BottomNavigationLayout';
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
    <BottomNavigationLayout>{page}</BottomNavigationLayout>
  </Authenticated>
);

export default DashboardFitness;
