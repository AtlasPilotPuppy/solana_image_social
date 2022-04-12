import {
  Button,
  Card,
  CardHeader,
  CardActions,
  Typography,
  Divider,
  styled,
  Grid,
  Box
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

import DepartmentsChart from './DepartmentsChart';

const DepartmentsChartWrapper = styled(DepartmentsChart)(
  () => `
    width: 90px;
`
);

const BoxChartWrapper = styled(Box)(
  ({ theme }) => `
    display: flex;
    align-items: center;
    margin-top: ${theme.spacing(1)};
    justify-content: center;
    flex-direction: column;
`
);

const BoxChartWrapperText = styled(Box)(
  ({ theme }) => `
    position: relative;
    width: 90px;
    height: 90px;
    
    .ChartText {
      color: ${theme.colors.warning.main};
      font-weight: bold;
      position: absolute;
      height: 40px;
      width: 40px;
      top: 50%;
      left: 50%;
      margin: -20px 0 0 -20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
`
);

function Departments() {
  const { t }: { t: any } = useTranslation();

  const beds = {
    og: {
      datasets: [
        {
          data: [20, 10]
        }
      ],
      labels: [t('Free Beds'), t('Occupied Beds')]
    },
    mg: {
      datasets: [
        {
          data: [20, 10]
        }
      ],
      labels: [t('Free Beds'), t('Occupied Beds')]
    }
  };

  const doctors = {
    og: {
      datasets: [
        {
          data: [67, 33]
        }
      ],
      labels: [t('Free Doctors'), t('Occupied Doctors')]
    },
    mg: {
      datasets: [
        {
          data: [50, 50]
        }
      ],
      labels: [t('Free Doctors'), t('Occupied Doctors')]
    }
  };

  return (
    <Card
      sx={{
        height: '100%'
      }}
    >
      <CardHeader title={t('Departments')} />
      <Divider />
      <Box py={3}>
        <Grid container spacing={0} justifyContent="center" alignItems="center">
          <Grid
            display="flex"
            alignItems="center"
            justifyContent="center"
            xs={12}
            sm={4}
            item
          >
            <Box
              sx={{
                maxWidth: 150
              }}
            >
              <Typography align="center" variant="h4">
                {t('Obstetrics and Gynaecology')}
              </Typography>
            </Box>
          </Grid>
          <Grid
            xs={12}
            sm={4}
            sx={{
              position: 'relative'
            }}
            item
          >
            <Box
              component="span"
              sx={{
                display: { xs: 'none', sm: 'inline-block' }
              }}
            >
              <Divider orientation="vertical" flexItem absolute />
            </Box>
            <BoxChartWrapper>
              <Typography align="center" variant="subtitle2" gutterBottom>
                {t('Available Beds')}
              </Typography>
              <BoxChartWrapperText>
                <div className="ChartText">
                  <span>20</span>
                </div>
                <DepartmentsChartWrapper data={beds.og} />
              </BoxChartWrapperText>
            </BoxChartWrapper>
          </Grid>
          <Grid
            xs={12}
            sm={4}
            sx={{
              position: 'relative'
            }}
            item
          >
            <Box
              component="span"
              sx={{
                display: { xs: 'none', sm: 'inline-block' }
              }}
            >
              <Divider orientation="vertical" flexItem absolute />
            </Box>
            <BoxChartWrapper>
              <Typography align="center" variant="subtitle2" gutterBottom>
                {t('Free Doctors')}
              </Typography>
              <BoxChartWrapperText>
                <div className="ChartText">
                  <span>55</span>
                </div>
                <DepartmentsChartWrapper data={doctors.og} />
              </BoxChartWrapperText>
            </BoxChartWrapper>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box py={3}>
        <Grid container spacing={0} justifyContent="center" alignItems="center">
          <Grid
            display="flex"
            alignItems="center"
            justifyContent="center"
            xs={12}
            sm={4}
            item
          >
            <Box
              sx={{
                maxWidth: 150
              }}
            >
              <Typography align="center" variant="h4">
                {t('Medical Gastroenterology')}
              </Typography>
            </Box>
          </Grid>
          <Grid
            xs={12}
            sm={4}
            sx={{
              position: 'relative'
            }}
            item
          >
            <Box
              component="span"
              sx={{
                display: { xs: 'none', sm: 'inline-block' }
              }}
            >
              <Divider orientation="vertical" flexItem absolute />
            </Box>
            <BoxChartWrapper>
              <Typography align="center" variant="subtitle2" gutterBottom>
                {t('Available Beds')}
              </Typography>
              <BoxChartWrapperText>
                <div className="ChartText">
                  <span>67</span>
                </div>
                <DepartmentsChartWrapper data={beds.mg} />
              </BoxChartWrapperText>
            </BoxChartWrapper>
          </Grid>
          <Grid
            xs={12}
            sm={4}
            sx={{
              position: 'relative'
            }}
            item
          >
            <Box
              component="span"
              sx={{
                display: { xs: 'none', sm: 'inline-block' }
              }}
            >
              <Divider orientation="vertical" flexItem absolute />
            </Box>
            <BoxChartWrapper>
              <Typography align="center" variant="subtitle2" gutterBottom>
                {t('Free Doctors')}
              </Typography>
              <BoxChartWrapperText>
                <div className="ChartText">
                  <span>50</span>
                </div>
                <DepartmentsChartWrapper data={doctors.mg} />
              </BoxChartWrapperText>
            </BoxChartWrapper>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <CardActions
        sx={{
          justifyContent: 'center',
          py: 2
        }}
      >
        <Button
          variant="contained"
          size="small"
          endIcon={<ArrowForwardTwoToneIcon fontSize="small" />}
        >
          {t('View all departments')}
        </Button>
      </CardActions>
    </Card>
  );
}

export default Departments;
