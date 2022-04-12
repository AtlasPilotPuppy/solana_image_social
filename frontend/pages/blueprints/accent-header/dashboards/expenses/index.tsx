import Head from 'next/head';

import AccentHeaderLayout from 'src/layouts/AccentHeaderLayout';
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
    <AccentHeaderLayout>{page}</AccentHeaderLayout>
  </Authenticated>
);

export default DashboardExpenses;
