import Head from 'next/head';

import BottomNavigationLayout from 'src/layouts/BottomNavigationLayout';
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
    <BottomNavigationLayout>{page}</BottomNavigationLayout>
  </Authenticated>
);

export default DashboardExpenses;
