import PageHeader from 'src/content/Blocks/ImageCards/PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import Head from 'next/head';

import { Authenticated } from 'src/components/Authenticated';
import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';

import Block1 from 'src/content/Blocks/ImageCards/Block1';
import Block2 from 'src/content/Blocks/ImageCards/Block2';
import Block3 from 'src/content/Blocks/ImageCards/Block3';
import Block4 from 'src/content/Blocks/ImageCards/Block4';
import Block5 from 'src/content/Blocks/ImageCards/Block5';
import { Grid } from '@mui/material';

function DataDisplayImageCards() {
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
      </Grid>
      <Footer />
    </>
  );
}

DataDisplayImageCards.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default DataDisplayImageCards;
