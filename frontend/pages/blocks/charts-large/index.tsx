import PageHeader from 'src/content/Blocks/ChartsLarge/PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import Head from 'next/head';

import { Authenticated } from 'src/components/Authenticated';
import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';

import { Grid, Typography, useTheme, Box, alpha, Card } from '@mui/material';
import NotificationImportantTwoToneIcon from '@mui/icons-material/NotificationImportantTwoTone';

import Block1 from 'src/content/Blocks/ChartsLarge/Block1';
import Block2 from 'src/content/Blocks/ChartsLarge/Block2';
import Block3 from 'src/content/Blocks/ChartsLarge/Block3';
import Block4 from 'src/content/Blocks/ChartsLarge/Block4';
import Block5 from 'src/content/Blocks/ChartsLarge/Block5';
import Block6 from 'src/content/Blocks/ChartsLarge/Block6';
import Block7 from 'src/content/Blocks/ChartsLarge/Block7';
import Block8 from 'src/content/Blocks/ChartsLarge/Block8';

function DataDisplayChartsLarge() {
  const theme = useTheme();

  return (
    <>
      <Head>
        <title>Charts Large Blocks</title>
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
          <Card
            variant="outlined"
            sx={{
              background: alpha(theme.colors.info.main, 0.08),
              display: 'flex',
              alignItems: 'flex-start',
              p: 2
            }}
          >
            <NotificationImportantTwoToneIcon
              sx={{
                mr: 1,
                color: theme.colors.info.main,
                fontSize: theme.typography.pxToRem(22)
              }}
            />
            <Box>
              <Typography
                variant="h4"
                sx={{
                  pt: 0.2
                }}
                gutterBottom
              >
                Version 3.0 Update
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: theme.typography.pxToRem(13)
                }}
              >
                Starting with version 3.0 we replaced <b>Chart.js</b> with{' '}
                <b>ApexCharts</b> for better UX and ease of use. If you still
                want to use the Chart.js plugin, we've included below a few
                implementation examples.
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item md={6} xs={12}>
          <Block1 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block2 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block3 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block4 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block5 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block6 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block7 />
        </Grid>
        <Grid item md={6} xs={12}>
          <Block8 />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

DataDisplayChartsLarge.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default DataDisplayChartsLarge;
