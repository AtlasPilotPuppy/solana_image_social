import Head from 'next/head';

import AccentSidebarLayout from 'src/layouts/AccentSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';

import DashboardExpensesContent from 'src/content/DashboardPages/expenses';

function DashboardExpenses() {
  return (
    <>
      <Head>
        <title>Expenses Dashboard</title>
      </Head>
      <DashboardExpensesContent />
    </>
  );
}

DashboardExpenses.getLayout = (page) => (
  <Authenticated>
    <AccentSidebarLayout>{page}</AccentSidebarLayout>
  </Authenticated>
);

export default DashboardExpenses;
