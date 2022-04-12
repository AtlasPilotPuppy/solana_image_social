import Head from 'next/head';

import { useState, useEffect, useCallback } from 'react';

import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';

import Footer from 'src/components/Footer';
import PageHeader from 'src/content/Management/Commerce/shop/PageHeader';
import Sidebar from 'src/content/Management/Commerce/shop/Sidebar';
import Results from 'src/content/Management/Commerce/shop/Results';

import {
  Hidden,
  Box,
  Grid,
  IconButton,
  Drawer,
  useTheme,
  styled
} from '@mui/material';

import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';

import { useRefMounted } from 'src/hooks/useRefMounted';
import type { Product } from 'src/models/product';
import { productsApi } from 'src/mocks/products';

import Scrollbar from 'src/components/Scrollbar';

const sidebarContent = (
  <Scrollbar>
    <Sidebar />
  </Scrollbar>
);

const DrawerWrapperMobile = styled(Drawer)(
  () => `
    width: 340px;
    flex-shrink: 0;

  & > .MuiPaper-root {
        width: 340px;
        z-index: 3;
  }
`
);

const IconButtonToggle = styled(IconButton)(
  ({ theme }) => `
  width: ${theme.spacing(6)};
  height: ${theme.spacing(6)};
`
);

function ManagementProductsShop() {
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isMountedRef = useRefMounted();
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = useCallback(async () => {
    try {
      const response = await productsApi.getProducts();

      if (isMountedRef()) {
        setProducts(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <>
      <Head>
        <title>Products Platform - Applications</title>
      </Head>

      <Grid
        sx={{ px: 4 }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid display="flex" alignItems="center" item xs={12}>
          <Hidden mdUp>
            <IconButtonToggle
              sx={{ mr: 1 }}
              color="primary"
              onClick={handleDrawerToggle}
              size="small"
            >
              <MenuTwoToneIcon />
            </IconButtonToggle>
          </Hidden>
          <Box flex={1} mt={3}>
            <PageHeader />
          </Box>
        </Grid>
        <Hidden mdDown>
          <Grid item xs={12} md={3}>
            <Sidebar />
          </Grid>
        </Hidden>
        <Grid item xs={12} md={9}>
          {products && <Results products={products} />}
        </Grid>
      </Grid>
      <Hidden mdUp>
        <DrawerWrapperMobile
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
        >
          {sidebarContent}
        </DrawerWrapperMobile>
      </Hidden>
      <Footer />
    </>
  );
}

ManagementProductsShop.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default ManagementProductsShop;
