import { useState, useCallback, useEffect } from 'react';
import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';

import Head from 'next/head';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import { Grid } from '@mui/material';
import { useRefMounted } from 'src/hooks/useRefMounted';
import type { Product } from 'src/models/product';
import ProductBody from 'src/content/Management/Commerce/single/ProductBody';
import Footer from 'src/components/Footer';
import PageHeader from 'src/content/Management/Commerce/single/PageHeader';
import { productsApi } from 'src/mocks/products';

function ManagementProductSingle() {
  const isMountedRef = useRefMounted();
  const [product, setProduct] = useState<Product | null>(null);

  const getProduct = useCallback(async () => {
    try {
      const response = await productsApi.getProduct();

      if (isMountedRef()) {
        setProduct(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  if (!product) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{product.name + ' - Products Management'}</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader product={product} />
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
          <ProductBody product={product} />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

ManagementProductSingle.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default ManagementProductSingle;
