import Head from 'next/head';

import TopNavigationLayout from 'src/layouts/TopNavigationLayout';
import { Authenticated } from 'src/components/Authenticated';

import DashboardTasksContent from 'src/content/DashboardPages/tasks';

function DashboardTasks() {
  return (
    <>
      <Head>
        <title>Tasks Dashboard</title>
      </Head>
      <DashboardTasksContent />
    </>
  );
}

DashboardTasks.getLayout = (page) => (
  <Authenticated>
    <TopNavigationLayout>{page}</TopNavigationLayout>
  </Authenticated>
);

export default DashboardTasks;
