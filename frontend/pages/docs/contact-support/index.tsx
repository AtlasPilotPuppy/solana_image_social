import { Container, Typography, Grid } from '@mui/material';
import type { ReactElement } from 'react';
import DocsLayout from 'src/layouts/DocsLayout';
import Head from 'next/head';
import PageHeader from 'src/components/PageHeaderDocs';

function ContactSupport() {
  return (
    <>
      <Head>
        <title>Contact Support - Tokyo NextJS Typescript Admin Dashboard</title>
      </Head>
      <Container maxWidth={false}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <PageHeader heading="Contact Support" subheading=""></PageHeader>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ mb: 2 }} variant="h2">
              Support Tickets
            </Typography>
            <Typography paragraph>
              If you need help you can open a support ticket by sending an email
              to <code>support@bloomui.freshdesk.com</code>
            </Typography>
            <br />
            <Typography sx={{ mb: 2 }} variant="h2">
              Custom Pages
            </Typography>
            <Typography paragraph>
              Based on our experience in developing applications user interfaces
              we chose popular niche areas for the dashboard pages, applications
              and management sections. We understand that these might not be
              enough for your app's needs. That's why we are offering to build
              custom pages based on your needs, if we feel that your requested
              page design might benefit multiple customers or if they aren't too
              specific to a particular products niche.
            </Typography>
            <Typography paragraph>
              All you have to do is email us at{' '}
              <code>support@bloomui.freshdesk.com</code>
              with a wireframe, prototype or design for the requested pages.
              After our initial review, we will contact you and let you know if
              we'll be integrating your custom page in Tokyo React Admin
              Dashboard.
            </Typography>
            <Typography paragraph>
              Please note that we reserve the right to reject any or all custom
              page requests that are made for free custom pages.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ContactSupport;

ContactSupport.getLayout = function getLayout(page: ReactElement) {
  return <DocsLayout>{page}</DocsLayout>;
};
