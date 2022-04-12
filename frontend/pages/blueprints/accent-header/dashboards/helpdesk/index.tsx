import Head from 'next/head';

import AccentHeaderLayout from 'src/layouts/AccentHeaderLayout';
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
    <AccentHeaderLayout>{page}</AccentHeaderLayout>
  </Authenticated>
);

export default DashboardHelpdesk;
