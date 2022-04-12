import PageHeader from 'src/content/Blocks/Grids/PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import Head from 'next/head';

import { Authenticated } from 'src/components/Authenticated';
import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';

import Block1 from 'src/content/Blocks/Grids/Block1';
import Block2 from 'src/content/Blocks/Grids/Block2';
import Block3 from 'src/content/Blocks/Grids/Block3';
import Block4 from 'src/content/Blocks/Grids/Block4';
import Block5 from 'src/content/Blocks/Grids/Block5';
import Block6 from 'src/content/Blocks/Grids/Block6';
import Block7 from 'src/content/Blocks/Grids/Block7';
import { Grid } from '@mui/material';

function DataDisplayGrids() {
  return (
    <>
      <Head>
        <title>Analytics Dashboard</title>
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
        <Grid item md={6} xs={12}>
          <Block1 />
        </Grid>
        <Grid item md={6} xs={12}>
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
        <Grid item xs={12}>
          <Block7 />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

DataDisplayGrids.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default DataDisplayGrids;
