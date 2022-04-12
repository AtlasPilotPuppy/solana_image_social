import Head from 'next/head';

import BottomNavigationLayout from 'src/layouts/BottomNavigationLayout';
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
    <BottomNavigationLayout>{page}</BottomNavigationLayout>
  </Authenticated>
);

export default DashboardHelpdesk;
