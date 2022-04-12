import {
  CardContent,
  Box,
  CardHeader,
  Card,
  Grid,
  Typography,
  alpha,
  LinearProgress,
  Divider,
  Button,
  styled,
  linearProgressClasses
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import Block4Chart from './Block4Chart';

const Block4ChartWrapper = styled(Block4Chart)(
  () => `
          height: 343px;
  `
);

const LinearProgressPrimary = styled(LinearProgress)(
  ({ theme }) => `
        height: 6px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.primary.main, 0.3)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.primary.main};
        }
    `
);

const LinearProgressError = styled(LinearProgress)(
  ({ theme }) => `
        height: 6px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.error.main, 0.3)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.error.main};
        }
    `
);

const LinearProgressWarning = styled(LinearProgress)(
  ({ theme }) => `
        height: 6px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.warning.main, 0.3)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.warning.main};
        }
    `
);

const LinearProgressSuccess = styled(LinearProgress)(
  ({ theme }) => `
        height: 6px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.success.main, 0.3)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.success.main};
        }
    `
);

function Block4() {
  const { t }: { t: any } = useTranslation();

  const visitors = {
    orders: [1008, 940, 1010, 821, 1035],
    sales: [648, 745, 897, 743, 635],
    users: [1030, 897, 463, 856, 285],
    customers: [675, 386, 283, 897, 498]
  };

  const generic = {
    year: {
      labels: ['2018', '2019', '2020', '2021', '2022']
    }
  };

  return (
    <Card>
      <CardHeader
        sx={{
          p: 3
        }}
        action={
          <Button
            size="small"
            variant="outlined"
            endIcon={<ExpandMoreTwoToneIcon />}
          >
            {t('Actions')}
          </Button>
        }
        title={t('Users list')}
      />
      <Divider />
      <CardContent
        sx={{
          p: 4
        }}
      >
        <Box
          sx={{
            mb: 4,
            height: 343
          }}
        >
          <Block4ChartWrapper data={visitors} labels={generic.year.labels} />
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography
              component="div"
              color="text.primary"
              variant="h4"
              sx={{
                pb: 1
              }}
            >
              {t('Orders')}
            </Typography>
            <LinearProgressPrimary variant="determinate" value={35.76} />
            <Box
              display="flex"
              sx={{
                mt: 0.5
              }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography component="div" variant="subtitle1">
                0
              </Typography>
              <Typography component="div" variant="subtitle1">
                100%
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              component="div"
              color="text.primary"
              variant="h4"
              sx={{
                pb: 1
              }}
            >
              {t('Sales')}
            </Typography>
            <LinearProgressSuccess variant="determinate" value={83.12} />
            <Box
              display="flex"
              sx={{
                mt: 0.5
              }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography component="div" variant="subtitle1">
                0
              </Typography>
              <Typography component="div" variant="subtitle1">
                100%
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              component="div"
              color="text.primary"
              variant="h4"
              sx={{
                pb: 1
              }}
            >
              {t('Users')}
            </Typography>
            <LinearProgressWarning variant="determinate" value={17.98} />
            <Box
              display="flex"
              sx={{
                mt: 0.5
              }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography component="div" variant="subtitle1">
                0
              </Typography>
              <Typography component="div" variant="subtitle1">
                100%
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              component="div"
              color="text.primary"
              variant="h4"
              sx={{
                pb: 1
              }}
            >
              {t('Customers')}
            </Typography>
            <LinearProgressError variant="determinate" value={65.34} />
            <Box
              display="flex"
              sx={{
                mt: 0.5
              }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography component="div" variant="subtitle1">
                0
              </Typography>
              <Typography component="div" variant="subtitle1">
                100%
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Block4;
