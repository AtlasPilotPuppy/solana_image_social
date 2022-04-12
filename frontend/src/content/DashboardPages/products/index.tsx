import PageHeader from 'src/content/Dashboards/Products/PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import { Grid } from '@mui/material';

import Block1 from 'src/content/Dashboards/Products/Block1';
import Block2 from 'src/content/Dashboards/Products/Block2';
import Block3 from 'src/content/Blocks/ChartsLarge/Block5';
import Block4 from 'src/content/Dashboards/Products/Block4';
import Block5 from 'src/content/Blocks/ChartsSmall/Block5';
import Block6 from 'src/content/Dashboards/Products/Block6';

function DashboardProductsContent() {
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
        <Grid item xs={12}>
          <Block2 />
        </Grid>
        <Grid item xs={12} xl={6}>
          <Block3 />
        </Grid>
        <Grid item xs={12} xl={6}>
          <Block4 />
        </Grid>
        <Grid item xs={12}>
          <Block5 />
        </Grid>
        <Grid item xs={12}>
          <Block6 />
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}

export default DashboardProductsContent;
