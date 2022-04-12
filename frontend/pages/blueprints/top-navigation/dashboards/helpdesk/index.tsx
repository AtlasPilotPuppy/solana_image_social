import Head from 'next/head';

import TopNavigationLayout from 'src/layouts/TopNavigationLayout';
import { Authenticated } from 'src/components/Authenticated';

import DashboardHelpdeskContent from 'src/content/DashboardPages/helpdesk';

function DashboardHelpdesk() {
  return (
    <>
      <Head>
        <title>Helpdesk Dashboard</title>
      </Head>
      <DashboardHelpdeskContent />
    </>
  );
}

DashboardHelpdesk.getLayout = (page) => (
  <Authenticated>
    <TopNavigationLayout>{page}</TopNavigationLayout>
  </Authenticated>
);

export default DashboardHelpdesk;
