import Head from 'next/head';

import AccentHeaderLayout from 'src/layouts/AccentHeaderLayout';
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
    <AccentHeaderLayout>{page}</AccentHeaderLayout>
  </Authenticated>
);

export default DashboardTasks;
