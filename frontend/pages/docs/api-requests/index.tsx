import { Container, Typography, Grid } from '@mui/material';
import type { ReactElement } from 'react';
import DocsLayout from 'src/layouts/DocsLayout';
import Head from 'next/head';
import PageHeader from 'src/components/PageHeaderDocs';
import { Prism } from 'react-syntax-highlighter';
import a11yDark from 'react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark';

function ApiRequests() {
  const axiosImp = `import { useState, useEffect, useCallback } from 'react';

  import { Card } from '@mui/material';
  import useRefMounted from 'src/hooks/useRefMounted';
  import { CryptoOrder } from 'src/models/crypto_order';
  import { cryptoOrdersApi } from 'src/mocks/crypto_orders';
  import RecentOrdersTable from './RecentOrdersTable';
  
  function RecentOrders() {
    const isMountedRef = useRefMounted();
    const [cryptoOrders, setCryptoOrders] = useState<CryptoOrder[]>([]);
  
    const getCryptoOrders = useCallback(async () => {
      try {
        const response = await cryptoOrdersApi.getCryptoOrders();

        if (isMountedRef()) {
          setCryptoOrders(response);
        }
      } catch (err) {
        console.error(err);
      }
    }, [isMountedRef]);
  
    useEffect(() => {
      getCryptoOrders();
    }, [getCryptoOrders]);
  
    return (
      <Card>
        <RecentOrdersTable cryptoOrders={cryptoOrders} />
      </Card>
    );
  }
  
  export default RecentOrders;
  `;

  const axiosMock = `import { subDays } from 'date-fns';
  import type { CryptoOrder } from 'src/models/crypto_order';

  class CryptoOrdersApi {
    getCryptoOrders(): Promise<CryptoOrder[]> {
      const products: CryptoOrder[] = [
        {
          id: '1',
          orderDetails: 'Fiat Deposit',
          orderDate: new Date().getTime(),
          status: 'completed',
          orderID: 'VUVX709ET7BY',
          sourceName: 'Bank Account',
          sourceDesc: '*** 1111',
          amountCrypto: 34.4565,
          amount: 56787,
          cryptoCurrency: 'ETH',
          currency: '$'
        }
      ];

      return Promise.resolve(products);
    }
  }
  
  export const cryptoOrdersApi = new CryptoOrdersApi();`;

  return (
    <>
      <Head>
        <title>API Requests - Tokyo NextJS Typescript Admin Dashboard</title>
      </Head>
      <Container maxWidth={false}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <PageHeader heading="API Requests" subheading=""></PageHeader>
          </Grid>
          <Grid item xs={12}>
            <Typography paragraph>
              Throughout Tokyo NextJS Typescript Admin Dashboard you will find a
              few examples of API calls, mocked using Axios.
            </Typography>
            <Typography paragraph>
              Below is a simple example of an API call implementation.
            </Typography>
            <Prism
              showLineNumbers
              wrapLines
              language="javascript"
              style={a11yDark}
            >
              {axiosImp}
            </Prism>
            <br />
            <Typography paragraph>
              Using Axios Mock Adapter you can simulate request calls. Check out
              the example below:
            </Typography>
            <Prism
              showLineNumbers
              wrapLines
              language="javascript"
              style={a11yDark}
            >
              {axiosMock}
            </Prism>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ApiRequests;

ApiRequests.getLayout = function getLayout(page: ReactElement) {
  return <DocsLayout>{page}</DocsLayout>;
};
