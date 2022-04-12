import {
  CardContent,
  Box,
  CardHeader,
  Card,
  Stack,
  Typography,
  Divider,
  IconButton,
  styled,
  useTheme
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import Block1Chart from './Block1Chart';
import Gauge from 'src/components/Gauge';

const Block1ChartWrapper = styled(Block1Chart)(
  () => `
          height: 415px;
  `
);

function Block1() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const visitors = {
    current: [1008, 940, 1010, 821, 1035, 1030, 957, 926, 993, 1021, 997, 879],
    previous: [648, 745, 897, 743, 635, 842, 811, 696, 878, 987, 747, 731]
  };

  const data = {
    percentageLocal: 63,
    percentageExternal: 37
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
        sx={{ p: 3 }}
        titleTypographyProps={{
          component: 'h5',
          variant: 'h6',
          fontWeight: 'bold',
          sx: {
            textTransform: 'uppercase',
            textAlign: 'center'
          }
        }}
        action={
          <IconButton size="small" color="secondary">
            <MoreVertTwoToneIcon />
          </IconButton>
        }
        title={t('Visitors Locations')}
      />
      <CardContent
        sx={{
          pt: 0
        }}
      >
        <Box
          sx={{
            height: 415
          }}
        >
          <Block1ChartWrapper data={visitors} labels={generic.month.labels} />
        </Box>
        <Stack
          sx={{
            mt: 4
          }}
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          justifyContent="space-evenly"
          alignItems="center"
          spacing={0}
        >
          <Box>
            <Typography
              component="h6"
              variant="caption"
              fontWeight="bold"
              textAlign="center"
              sx={{
                pb: 2,
                color: `${theme.colors.success.main}`
              }}
            >
              {t('Local Visitors')}
            </Typography>
            <Gauge
              circleRatio={1}
              value={data.percentageLocal}
              strokeWidth={8}
              text={`${data.percentageLocal}%`}
              color="success"
              size="large"
            />
          </Box>
          <Box>
            <Typography
              component="h6"
              variant="caption"
              fontWeight="bold"
              textAlign="center"
              sx={{
                pb: 2,
                color: `${theme.colors.error.main}`
              }}
            >
              {t('External Visitors')}
            </Typography>
            <Gauge
              circleRatio={1}
              value={data.percentageExternal}
              strokeWidth={8}
              text={`${data.percentageExternal}%`}
              color="error"
              size="large"
            />
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default Block1;
