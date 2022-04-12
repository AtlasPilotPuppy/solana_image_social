import PageHeader from 'src/content/Dashboards/Finance/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import Footer from 'src/components/Footer';

import { Grid } from '@mui/material';

import RecentTransactions from 'src/content/Dashboards/Finance/RecentTransactions';
import MyCards from 'src/content/Dashboards/Finance/MyCards';
import UpgradeAccount from 'src/content/Dashboards/Finance/UpgradeAccount';
import Budget from 'src/content/Dashboards/Finance/Budget';
import AllExpenses from 'src/content/Dashboards/Finance/AllExpenses';
import ActiveSubscriptions from 'src/content/Dashboards/Finance/ActiveSubscriptions';

function DashboardFinanceContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>

      <Grid
        sx={{ px: 4 }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item lg={7} md={6} xs={12}>
          <RecentTransactions />
        </Grid>
        <Grid item lg={5} md={6} xs={12}>
          <MyCards />
        </Grid>
        <Grid item xs={12}>
          <UpgradeAccount />
        </Grid>
        <Grid item md={6} lg={5} xs={12}>
          <Budget />
        </Grid>
        <Grid item md={6} lg={7} xs={12}>
          <AllExpenses />
        </Grid>
        <Grid item xs={12}>
          <ActiveSubscriptions />
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}

export default DashboardFinanceContent;
