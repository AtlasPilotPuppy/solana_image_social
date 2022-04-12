import { FC } from 'react';
import Link from 'src/components/Link';

import {
  Breadcrumbs,
  Box,
  Grid,
  Typography,
  Tooltip,
  Button,
  IconButton
} from '@mui/material';
import { useTranslation } from 'react-i18next';

import type { Product } from 'src/models/product';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';
import PropTypes from 'prop-types';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';

interface PageHeaderProps {
  product: Product;
}

const PageHeader: FC<PageHeaderProps> = ({ product }) => {
  const { t }: { t: any } = useTranslation();

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Tooltip arrow placement="top" title={t('Go back')}>
            <IconButton
              href="/management/commerce/products"
              color="primary"
              sx={{
                p: 2,
                mr: 2
              }}
            >
              <ArrowBackTwoToneIcon />
            </IconButton>
          </Tooltip>
          <Box>
            <Typography variant="h3" component="h3" gutterBottom>
              {t('Product Details')}
            </Typography>
            <Breadcrumbs maxItems={2} aria-label="breadcrumb">
              <Link color="inherit" href="#">
                {t('Home')}
              </Link>
              <Link color="inherit" href="#">
                {t('Management')}
              </Link>
              <Link color="inherit" href="#">
                {t('Commerce')}
              </Link>
              <Link color="inherit" href="/management/commerce/products">
                {t('Products')}
              </Link>
              <Typography color="text.primary">{product.name}</Typography>
            </Breadcrumbs>
          </Box>
        </Box>
      </Grid>
      <Grid item>
        <Button
          sx={{
            mt: { xs: 2, sm: 0 }
          }}
          component={Link}
          size="large"
          startIcon={<StorefrontTwoToneIcon />}
          href="/management/commerce/shop"
          variant="contained"
        >
          {t('Shop Storefront')}
        </Button>
      </Grid>
    </Grid>
  );
};

PageHeader.propTypes = {
  // @ts-ignore
  product: PropTypes.object.isRequired
};

export default PageHeader;
