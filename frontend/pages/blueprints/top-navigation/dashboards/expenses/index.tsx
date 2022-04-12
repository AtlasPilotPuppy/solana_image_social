import Head from 'next/head';

import TopNavigationLayout from 'src/layouts/TopNavigationLayout';
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
    <TopNavigationLayout>{page}</TopNavigationLayout>
  </Authenticated>
);

export default DashboardExpenses;
