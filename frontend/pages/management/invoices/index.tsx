import { useState, useEffect, useCallback } from 'react';

import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';

import Head from 'next/head';
import PageHeader from 'src/content/Management/Invoices/PageHeader';
import Footer from 'src/components/Footer';
import Statistics from 'src/content/Management/Invoices/Statistics';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import { Grid } from '@mui/material';
import { useRefMounted } from 'src/hooks/useRefMounted';
import type { Invoice } from 'src/models/invoice';
import { invoicesApi } from 'src/mocks/invoices';
import Results from 'src/content/Management/Invoices/Results';

function ManagementInvoices() {
  const isMountedRef = useRefMounted();
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  const getInvoices = useCallback(async () => {
    try {
      const response = await invoicesApi.getInvoices();

      if (isMountedRef()) {
        setInvoices(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getInvoices();
  }, [getInvoices]);

  return (
    <>
      <Head>
        <title>Invoices - Management</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>

      <Grid
        sx={{ px: 4 }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={12}>
          <Statistics />
        </Grid>
        <Grid item xs={12}>
          <Results invoices={invoices} />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

ManagementInvoices.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default ManagementInvoices;
