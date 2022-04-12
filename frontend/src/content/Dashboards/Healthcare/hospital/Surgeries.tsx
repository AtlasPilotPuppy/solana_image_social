import {
  Card,
  CardHeader,
  Typography,
  Avatar,
  Box,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Label from 'src/components/Label';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import AppointmentsAltChart from './AppointmentsAltChart';
import MedicalServicesTwoToneIcon from '@mui/icons-material/MedicalServicesTwoTone';

const AppointmentsAltChartWrapper = styled(AppointmentsAltChart)(
  () => `
        height: 90px;
        width: 200px;
`
);

const AvatarPrimary = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.primary.lighter};
      color: ${theme.colors.primary.main};
      width: ${theme.spacing(6)};
      height: ${theme.spacing(6)};
      margin-top: -${theme.spacing(1)};
`
);

function Surgeries() {
  const { t }: { t: any } = useTranslation();

  const surgeries = {
    month: [
      1221, 1377, 1445, 1453, 1276, 1352, 1240, 1082, 1330, 1247, 1443, 1173
    ]
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
    <Card
      sx={{
        px: 1,
        pt: 1
      }}
    >
      <CardHeader
        sx={{
          textAlign: 'right',
          pb: 0
        }}
        avatar={
          <AvatarPrimary>
            <MedicalServicesTwoToneIcon />
          </AvatarPrimary>
        }
        action={
          <>
            <Label color="success">
              <ArrowUpwardTwoToneIcon fontSize="small" />
              <b>+25%</b>
            </Label>
            <Typography
              align="right"
              variant="subtitle1"
              color="text.secondary"
            >
              {t('since last month')}
            </Typography>
          </>
        }
      />
      <Box
        sx={{
          pl: 2,
          pt: 2
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography
              variant="h4"
              sx={{
                pb: 1
              }}
            >
              {t('Surgeries')}
            </Typography>
            <Typography variant="h2">82</Typography>
          </Box>
          <Box height={90} width={200}>
            <AppointmentsAltChartWrapper
              data={surgeries}
              labels={generic.month.labels}
            />
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

export default Surgeries;
