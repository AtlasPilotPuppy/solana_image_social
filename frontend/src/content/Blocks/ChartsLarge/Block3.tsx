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
import Block3Chart from './Block3Chart';

const Block3ChartWrapper = styled(Block3Chart)(
  () => `
        height: 353px;
  `
);

const LinearProgressError = styled(LinearProgress)(
  ({ theme }) => `
    height: 12px;
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

function Block3() {
  const { t }: { t: any } = useTranslation();

  const visitors = {
    current: [1008, 940, 1010, 821, 1035, 1030, 957, 926, 993, 1021, 997, 879],
    previous: [648, 745, 897, 743, 635, 842, 811, 696, 878, 987, 747, 731],
    total: [1030, 897, 463, 856, 285, 764, 426, 635, 1030, 1021, 1008, 821]
  };

  const generic = {
    month: {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
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
            {t('Export')}
          </Button>
        }
        title={t('Income Reports')}
      />
      <Divider />
      <CardContent sx={{ p: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography
              component="div"
              color="text.secondary"
              variant="h4"
              gutterBottom
            >
              {t('YoY Income')}
            </Typography>
            <Typography component="div" variant="h3">
              <small>$</small> 165,594.00
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              component="div"
              color="text.secondary"
              variant="h4"
              gutterBottom
            >
              {t('Best Seller')}
            </Typography>
            <Typography component="div" noWrap variant="h3">
              Macbook PRO 14" 2021
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              component="div"
              color="text.secondary"
              variant="h4"
              gutterBottom
            >
              {t('Orders Volume')}
            </Typography>
            <Typography component="div" variant="h3">
              45,954
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              component="div"
              color="text.secondary"
              variant="h4"
              sx={{
                pb: 1
              }}
            >
              {t('Sales Target')}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  mr: 1.5
                }}
              >
                <LinearProgressError variant="determinate" value={67.5} />
              </Box>
              <Box
                sx={{
                  minWidth: 35
                }}
              >
                <Typography variant="h5">67.5%</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 4,
            height: 353
          }}
        >
          <Block3ChartWrapper data={visitors} labels={generic.month.labels} />
        </Box>
      </CardContent>
    </Card>
  );
}

export default Block3;
