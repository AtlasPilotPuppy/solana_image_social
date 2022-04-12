import PageHeader from 'src/content/Dashboards/Statistics/PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import { Grid } from '@mui/material';

import Block1 from 'src/content/Dashboards/Statistics/Block1';
import Block2 from 'src/content/Dashboards/Statistics/Block2';
import Block3 from 'src/content/Dashboards/Statistics/Block3';
import Block4 from 'src/content/Blocks/SparklinesLarge/Block6';
import Block5 from 'src/content/Dashboards/Statistics/Block5';
import Block6 from 'src/content/Blocks/Grids/Block5';
import Block7 from 'src/content/Blocks/IconCards/Block4';

function DashboardStatisticsContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>

      <Grid
        sx={{
          px: 4
        }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={4}
      >
        <Grid item xs={12} md={7}>
          <Block1 />
        </Grid>
        <Grid item xs={12} md={5}>
          <Block2 />
        </Grid>
        <Grid item xs={12} md={6}>
          <Block3 />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12}>
              <Block4 />
            </Grid>
            <Grid item xs={12}>
              <Block5 />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Block6 />
        </Grid>
        <Grid item xs={12}>
          <Block7 />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default DashboardStatisticsContent;
