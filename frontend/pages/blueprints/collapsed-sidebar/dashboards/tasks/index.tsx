import Head from 'next/head';

import CollapsedSidebarLayout from 'src/layouts/CollapsedSidebarLayout';
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
    <CollapsedSidebarLayout>{page}</CollapsedSidebarLayout>
  </Authenticated>
);

export default DashboardTasks;
