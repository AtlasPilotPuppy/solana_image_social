import PageHeader from 'src/content/Dashboards/Banking/PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import { Grid } from '@mui/material';

import Transfers from 'src/content/Dashboards/Banking/Transfers';
import Bills from 'src/content/Dashboards/Banking/Bills';
import Requests from 'src/content/Dashboards/Banking/Requests';
import Payments from 'src/content/Dashboards/Banking/Payments';
import MainAccount from 'src/content/Dashboards/Banking/MainAccount';
import SecondaryAccounts from 'src/content/Dashboards/Banking/SecondaryAccounts';
import Investments from 'src/content/Dashboards/Banking/Investments';
import TransactionsStatistics from 'src/content/Dashboards/Banking/TransactionsStatistics';

function DashboardBankingContent() {
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
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item lg={3} sm={6} xs={12}>
              <Transfers />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <Bills />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <Requests />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <Payments />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={8} xs={12}>
          <MainAccount />
        </Grid>
        <Grid item md={4} xs={12}>
          <SecondaryAccounts />
        </Grid>
        <Grid item lg={5} md={6} xs={12}>
          <Investments />
        </Grid>
        <Grid item lg={7} md={6} xs={12}>
          <TransactionsStatistics />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default DashboardBankingContent;
