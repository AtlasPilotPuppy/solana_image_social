import PageHeader from 'src/content/Blocks/ChartsSmall/PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import Head from 'next/head';

import { Authenticated } from 'src/components/Authenticated';
import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';

import Block1 from 'src/content/Blocks/ChartsSmall/Block1';
import Block2 from 'src/content/Blocks/ChartsSmall/Block2';
import Block3 from 'src/content/Blocks/ChartsSmall/Block3';
import Block4 from 'src/content/Blocks/ChartsSmall/Block4';
import Block5 from 'src/content/Blocks/ChartsSmall/Block5';
import Block6 from 'src/content/Blocks/ChartsSmall/Block6';
import { Grid } from '@mui/material';

function DataDisplayChartsSmall() {
  return (
    <>
      <Head>
        <title>Charts Small Blocks</title>
      </Head>
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
        <Grid item xs={12}>
          <Block3 />
        </Grid>
        <Grid item xs={12}>
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

DataDisplayChartsSmall.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default DataDisplayChartsSmall;
