import { Grid } from '@mui/material';

import PageHeader from 'src/content/Dashboards/Analytics/PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import AudienceOverview from 'src/content/Dashboards/Analytics/AudienceOverview';
import Conversions from 'src/content/Dashboards/Analytics/Conversions';
import TopLandingPages from 'src/content/Dashboards/Analytics/TopLandingPages';
import ActiveReferrals from 'src/content/Dashboards/Analytics/ActiveReferrals';
import PendingInvitations from 'src/content/Dashboards/Analytics/PendingInvitations';
import BounceRate from 'src/content/Dashboards/Analytics/BounceRate';
import ConversionsAlt from 'src/content/Dashboards/Analytics/ConversionsAlt';
import SessionsByCountry from 'src/content/Dashboards/Analytics/SessionsByCountry';
import TrafficSources from 'src/content/Dashboards/Analytics/TrafficSources';

function DashboardAnalyticsContent() {
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
        <Grid item lg={8} md={6} xs={12}>
          <Grid
            container
            spacing={3}
            direction="row"
            justifyContent="center"
            alignItems="stretch"
          >
            <Grid item sm={6} xs={12}>
              <ActiveReferrals />
            </Grid>
            <Grid item sm={6} xs={12}>
              <PendingInvitations />
            </Grid>
            <Grid item sm={6} xs={12}>
              <BounceRate />
            </Grid>
            <Grid item sm={6} xs={12}>
              <ConversionsAlt />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <SessionsByCountry />
        </Grid>
        <Grid item xs={12}>
          <AudienceOverview />
        </Grid>
        <Grid item md={5} xs={12}>
          <Conversions />
        </Grid>
        <Grid item md={7} xs={12}>
          <TopLandingPages />
        </Grid>
        <Grid item xs={12}>
          <TrafficSources />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default DashboardAnalyticsContent;
