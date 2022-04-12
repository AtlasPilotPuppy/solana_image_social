import PageHeader from 'src/content/Dashboards/Commerce/PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import { Grid } from '@mui/material';

import GrossSales from 'src/content/Dashboards/Commerce/GrossSales';
import Customers from 'src/content/Dashboards/Commerce/Customers';
import Orders from 'src/content/Dashboards/Commerce/Orders';
import Refunds from 'src/content/Dashboards/Commerce/Refunds';
import VisitorsOverview from 'src/content/Dashboards/Commerce/VisitorsOverview';
import RecentTransactions from 'src/content/Dashboards/Commerce/RecentTransactions';
import FullReport from 'src/content/Dashboards/Commerce/FullReport';
import SalesByCategory from 'src/content/Dashboards/Commerce/SalesByCategory';
import TopProducts from 'src/content/Dashboards/Commerce/TopProducts';
import MonthlyComparison from 'src/content/Dashboards/Commerce/MonthlyComparison';
import MonthlyGoals from 'src/content/Dashboards/Commerce/MonthlyGoals';
import SalesByCountry from 'src/content/Dashboards/Commerce/SalesByCountry';
import Traffic from 'src/content/Dashboards/Commerce/Traffic';

function DashboardCommerceContent() {
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
              <GrossSales />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <Customers />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <Orders />
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <Refunds />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} lg={7} xs={12}>
          <VisitorsOverview />
        </Grid>
        <Grid item md={6} lg={5} xs={12}>
          <RecentTransactions />
        </Grid>
        <Grid item lg={5} xs={12}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item lg={12} md={6} xs={12}>
              <FullReport />
            </Grid>
            <Grid item lg={12} md={6} xs={12}>
              <SalesByCategory />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={7} xs={12}>
          <TopProducts />
        </Grid>
        <Grid item md={6} lg={7} xs={12}>
          <MonthlyComparison />
        </Grid>
        <Grid item md={6} lg={5} xs={12}>
          <MonthlyGoals />
        </Grid>
        <Grid item md={6} lg={5} xs={12}>
          <SalesByCountry />
        </Grid>
        <Grid item md={6} lg={7} xs={12}>
          <Traffic />
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}

export default DashboardCommerceContent;
