import { Container, Grid, List, ListItem, Typography } from '@mui/material';
import type { ReactElement } from 'react';
import DocsLayout from 'src/layouts/DocsLayout';
import Head from 'next/head';
import PageHeader from 'src/components/PageHeaderDocs';

function Changelog() {
  return (
    <>
      <Head>
        <title>Changelog - Tokyo NextJS Typescript Admin Dashboard</title>
      </Head>
      <Container maxWidth={false}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <PageHeader heading="Changelog" subheading=""></PageHeader>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              Version 3.0
            </Typography>
            <Typography
              component="span"
              fontWeight="normal"
              variant="h3"
              color="text.secondary"
            >
              Released on: <b>30 November 2021</b>
            </Typography>
            <br />
            <br />
            <List>
              <ListItem>
                Updated to latest version of MUI (Material-UI) version 5.
              </ListItem>
              <ListItem>
                Updated all dependencies to their newest versions.
              </ListItem>
              <ListItem>Added 3 new dashboard pages</ListItem>
              <ListItem>
                Added 1 new layout blueprint (Extended Sidebar) which is now the
                default one.
              </ListItem>
              <ListItem>Small design improvements across most pages.</ListItem>
              <ListItem>
                Added new "Blocks" section with over 250 new components.
              </ListItem>
              <ListItem>
                Replaced Chart.js with ApexCharts. Kept a few Chart.js examples
                if you still want to use it.
              </ListItem>
              <ListItem>Fixed responsive issues.</ListItem>
              <ListItem>
                Replaced depricated MUI hidden component with sx prop
                functionality
              </ListItem>
              <ListItem>
                Bumped template version from 1.0 directly to 3.0 to catch up to
                the CRA (Create-React-App) version in order to avoid confusion.
              </ListItem>
              <ListItem>
                Added auth methods (Firebase, Amplify, JWT Tokens, Auth0)
                functionality.
              </ListItem>
              <ListItem>Added Calendar and Mailbox apps pages</ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              Version 1.0
            </Typography>
            <Typography
              component="span"
              fontWeight="normal"
              variant="h3"
              color="text.secondary"
            >
              Released on: <b>16 October 2021</b>
            </Typography>
            <br />
            <br />
            <List>
              <ListItem>initial version, first release</ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Changelog;

Changelog.getLayout = function getLayout(page: ReactElement) {
  return <DocsLayout>{page}</DocsLayout>;
};
