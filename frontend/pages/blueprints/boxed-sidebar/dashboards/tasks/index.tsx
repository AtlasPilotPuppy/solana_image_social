import Head from 'next/head';

import BoxedSidebarLayout from 'src/layouts/BoxedSidebarLayout';
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
    <BoxedSidebarLayout>{page}</BoxedSidebarLayout>
  </Authenticated>
);

export default DashboardTasks;
