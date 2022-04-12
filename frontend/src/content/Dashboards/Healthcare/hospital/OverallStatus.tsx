import { useRef, useState } from 'react';
import {
  Button,
  Card,
  Box,
  CardContent,
  CardHeader,
  Typography,
  Divider,
  Menu,
  MenuItem,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import OverallStatusChart from './OverallStatusChart';

const DotSuccess = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    background: ${theme.colors.success.main};
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);

const DotPrimary = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    background: ${theme.colors.primary.main};
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);

const OverallStatusChartWrapper = styled(OverallStatusChart)(
  () => `
        height: 220px;
`
);

function OverallStatus() {
  const { t }: { t: any } = useTranslation();
  const actionRef1 = useRef<any>(null);
  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);

  const periods = [
    {
      value: 'today',
      text: t('Today')
    },
    {
      value: 'yesterday',
      text: t('Yesterday')
    },
    {
      value: 'last_month',
      text: t('Last month')
    },
    {
      value: 'last_year',
      text: t('Last year')
    }
  ];

  const [period, setPeriod] = useState<string>(periods[2].text);

  const status = {
    month: {
      current: [
        1401, 565, 1105, 696, 1469, 1250, 1341, 1231, 505, 783, 998, 738
      ],
      previous: [
        1103, 626, 924, 560, 1130, 1081, 971, 1156, 522, 975, 1054, 1421
      ]
    }
  };

  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  return (
    <Card
      sx={{
        height: '100%'
      }}
    >
      <CardHeader
        action={
          <>
            <Button
              size="small"
              variant="outlined"
              ref={actionRef1}
              onClick={() => setOpenMenuPeriod(true)}
              endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
            >
              {period}
            </Button>
            <Menu
              disableScrollLock
              anchorEl={actionRef1.current}
              onClose={() => setOpenMenuPeriod(false)}
              open={openPeriod}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
            >
              {periods.map((_period) => (
                <MenuItem
                  key={_period.value}
                  onClick={() => {
                    setPeriod(_period.text);
                    setOpenMenuPeriod(false);
                  }}
                >
                  {_period.text}
                </MenuItem>
              ))}
            </Menu>
          </>
        }
        title={t('Overall Status')}
      />
      <Divider />
      <CardContent>
        <Box
          pb={4}
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: 'flex',
              alignItems: 'center',
              mr: 2
            }}
          >
            <DotPrimary />
            {t('patients')}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <DotSuccess />
            {t('consultations')}
          </Typography>
        </Box>

        <Box height={220}>
          <OverallStatusChartWrapper data={status.month} labels={month} />
        </Box>
      </CardContent>
    </Card>
  );
}

export default OverallStatus;
