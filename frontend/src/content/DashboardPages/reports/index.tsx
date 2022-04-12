import PageHeader from 'src/content/Dashboards/Reports/PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import { Grid } from '@mui/material';

import Block1 from 'src/content/Blocks/Statistics/Block3';
import Block2 from 'src/content/Blocks/ListsLarge/Block8';
import Block3 from 'src/content/Dashboards/Reports/Block3';
import Block4 from 'src/content/Dashboards/Reports/Block4';
import Block5 from 'src/content/Dashboards/Reports/Block5';
import Block6 from 'src/content/Dashboards/Reports/Block6';
import Block7 from 'src/content/Dashboards/Reports/Block7';
import Block8 from 'src/content/Dashboards/Reports/Block8';
import Block9 from 'src/content/Dashboards/Reports/Block9';
import Block10 from 'src/content/Blocks/ListsSmall/Block7';
import Block11 from 'src/content/Blocks/ListsSmall/Block8';
import Block12 from 'src/content/Dashboards/Reports/Block12';
import Block13 from 'src/content/Dashboards/Reports/Block13';

function DashboardReportsContent() {
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
        <Grid item xs={12}>
          <Block1 />
        </Grid>
        <Grid item md={7} xs={12}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12}>
              <Block2 />
            </Grid>
            <Grid item xs={12}>
              <Block4 />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={5} xs={12}>
          <Block3 />
        </Grid>
        <Grid item xs={12}>
          <Block5 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block6 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block7 />
        </Grid>
        <Grid item md={5} xs={12}>
          <Block8 />
        </Grid>
        <Grid item md={7} xs={12}>
          <Block9 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block10 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block11 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block12 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block13 />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default DashboardReportsContent;
