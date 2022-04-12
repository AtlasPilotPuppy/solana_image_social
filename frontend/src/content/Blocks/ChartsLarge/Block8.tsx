import {
  Box,
  Card,
  Typography,
  Divider,
  Button,
  alpha,
  Stack,
  styled,
  useTheme
} from '@mui/material';
import ScreenSearchDesktopTwoToneIcon from '@mui/icons-material/ScreenSearchDesktopTwoTone';
import { useTranslation } from 'react-i18next';
import Block8Chart from './Block8Chart';

const Block8ChartWrapper = styled(Block8Chart)(
  () => `
          height: 285px;
  `
);

const DotLegend = styled('span')(
  ({ theme }) => `
      border-radius: 22px;
      width: ${theme.spacing(1.8)};
      height: ${theme.spacing(1.8)};
      display: inline-block;
      margin-right: ${theme.spacing(0.8)};
      border: ${theme.colors.alpha.white[100]} solid 2px;
  `
);

const CardWrapper = styled(Card)(
  ({ theme }) => `
      background: ${alpha(theme.colors.alpha.black[10], 0.08)};
  `
);

function Block8() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

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
      <Box
        display="flex"
        alignItems="center"
        p={3}
        justifyContent="space-between"
      >
        <Box>
          <Typography
            component="div"
            sx={{
              fontSize: `${theme.typography.pxToRem(17)}`
            }}
            gutterBottom
            variant="h3"
          >
            {t('Sales')}
          </Typography>
          <Typography
            component="div"
            fontWeight="normal"
            color="text.secondary"
            variant="h5"
          >
            {t('Last 7 days sales statistics report')}
          </Typography>
        </Box>
        <Button
          size="small"
          variant="outlined"
          startIcon={<ScreenSearchDesktopTwoToneIcon />}
        >
          {t('Advanced search')}
        </Button>
      </Box>
      <CardWrapper
        sx={{
          mx: 3,
          p: 3
        }}
      >
        <Stack
          direction="row"
          divider={
            <Divider
              sx={{
                background: `${theme.colors.alpha.black[10]}`
              }}
              orientation="vertical"
              flexItem
            />
          }
          justifyContent="space-evenly"
          alignItems="center"
          spacing={4}
        >
          <Box py={2} textAlign="center">
            <Typography
              variant="h4"
              fontWeight="normal"
              color="text.secondary"
              gutterBottom
            >
              {t("Today's Earnings")}
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="center">
              <DotLegend
                style={{
                  background: `${theme.colors.primary.main}`
                }}
              />
              <Typography color="text.primary" variant="h4">
                <small>$</small>8,685
              </Typography>
            </Box>
          </Box>
          <Box py={2} textAlign="center">
            <Typography
              variant="h4"
              fontWeight="normal"
              color="text.secondary"
              gutterBottom
            >
              {t('Current Week')}
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="center">
              <DotLegend
                style={{
                  background: `${theme.colors.success.main}`
                }}
              />
              <Typography color="text.primary" variant="h4">
                <small>$</small>34,543
              </Typography>
            </Box>
          </Box>
          <Box py={2} textAlign="center">
            <Typography
              variant="h4"
              fontWeight="normal"
              color="text.secondary"
              gutterBottom
            >
              {t('Previous Week')}
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="center">
              <DotLegend
                style={{
                  background: `${theme.colors.error.main}`
                }}
              />
              <Typography color="text.primary" variant="h4">
                <small>$</small>76,645
              </Typography>
            </Box>
          </Box>
        </Stack>
      </CardWrapper>

      <Box p={3}>
        <Box
          sx={{
            height: 285
          }}
        >
          <Block8ChartWrapper data={visitors} labels={generic.month.labels} />
        </Box>
      </Box>
    </Card>
  );
}

export default Block8;
