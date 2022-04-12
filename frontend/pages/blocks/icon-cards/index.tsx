import PageHeader from 'src/content/Blocks/IconCards/PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import Head from 'next/head';

import { Authenticated } from 'src/components/Authenticated';
import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';

import Block1 from 'src/content/Blocks/IconCards/Block1';
import Block2 from 'src/content/Blocks/IconCards/Block2';
import Block3 from 'src/content/Blocks/IconCards/Block3';
import Block4 from 'src/content/Blocks/IconCards/Block4';
import Block5 from 'src/content/Blocks/IconCards/Block5';
import Block6 from 'src/content/Blocks/IconCards/Block6';
import Block7 from 'src/content/Blocks/IconCards/Block7';
import Block8 from 'src/content/Blocks/IconCards/Block8';
import Block9 from 'src/content/Blocks/IconCards/Block9';
import { Grid } from '@mui/material';

function DataDisplayIconCards() {
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
        <Grid item xs={12}>
          <Block7 />
        </Grid>
        <Grid item xs={12}>
          <Block8 />
        </Grid>
        <Grid item xs={12}>
          <Block9 />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

DataDisplayIconCards.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default DataDisplayIconCards;
