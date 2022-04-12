import {
  Card,
  CardHeader,
  Typography,
  Avatar,
  Box,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import MeetingRoomTwoToneIcon from '@mui/icons-material/MeetingRoomTwoTone';
import Label from 'src/components/Label';
import ArrowUpwardTwoToneIcon from '@mui/icons-material/ArrowUpwardTwoTone';
import AppointmentsAltChart from './AppointmentsAltChart';

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

function AppointmentsAlt() {
  const { t }: { t: any } = useTranslation();

  const appointments = {
    month: [1083, 649, 312, 1538, 1404, 630, 1714, 853, 1765, 1067, 696, 538]
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
            <MeetingRoomTwoToneIcon />
          </AvatarPrimary>
        }
        action={
          <>
            <Label color="success">
              <ArrowUpwardTwoToneIcon fontSize="small" />
              <b>+10%</b>
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
              {t('Appointments')}
            </Typography>
            <Typography variant="h2">678</Typography>
          </Box>
          <Box height={90} width={200}>
            <AppointmentsAltChartWrapper
              data={appointments}
              labels={generic.month.labels}
            />
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

export default AppointmentsAlt;
