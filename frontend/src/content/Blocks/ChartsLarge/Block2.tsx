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
import Block2Chart from './Block2Chart';
import { format, subHours, subDays } from 'date-fns';

const Block2ChartWrapper = styled(Block2Chart)(
  () => `
          height: 268px;
  `
);

const DividerInfo = styled(Divider)(
  ({ theme }) => `
        height: 4px;
        background: ${theme.colors.info.main}
  `
);

const DividerSuccess = styled(Divider)(
  ({ theme }) => `
        height: 4px;
        background: ${theme.colors.success.main}
  `
);

function Block2() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const visitors = {
    current: [1008, 940, 1010, 821, 1035, 1030, 957, 926, 993, 1021, 997, 879],
    previous: [648, 745, 897, 743, 635, 842, 811, 696, 878, 987, 747, 731]
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
        title={t('Total Revenue')}
      />

      <CardContent
        sx={{
          pt: 0
        }}
      >
        <Box
          sx={{
            height: 268
          }}
        >
          <Block2ChartWrapper data={visitors} labels={generic.month.labels} />
        </Box>
        <Stack
          sx={{
            mt: 3,
            px: 4
          }}
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Box
            py={3}
            sx={{
              width: '100%'
            }}
          >
            <Typography
              component="h6"
              variant="caption"
              fontWeight="bold"
              textAlign="center"
              sx={{
                color: `${theme.colors.alpha.black[100]}`,
                pb: 1
              }}
            >
              {t('Income')}
            </Typography>
            <DividerInfo />
          </Box>
          <Box
            py={3}
            sx={{
              width: '100%'
            }}
          >
            <Typography
              component="h6"
              variant="caption"
              fontWeight="bold"
              textAlign="center"
              sx={{
                color: `${theme.colors.alpha.black[100]}`,
                pb: 1
              }}
            >
              {t('Expenses')}
            </Typography>
            <DividerSuccess />
          </Box>
        </Stack>
        <Typography
          component="h6"
          variant="subtitle2"
          fontWeight="bold"
          textAlign="center"
        >
          {format(subHours(new Date(), 5), 'MMMM dd yyyy')}
        </Typography>
        <Stack
          sx={{
            mt: 2,
            px: 4
          }}
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Box
            sx={{
              width: '100%'
            }}
          >
            <Typography
              component="h6"
              variant="h2"
              textAlign="center"
              sx={{
                color: `${theme.colors.info.main}`,
                pb: 1
              }}
            >
              32.5%
            </Typography>
          </Box>
          <Box
            sx={{
              width: '100%'
            }}
          >
            <Typography
              component="h6"
              variant="h2"
              textAlign="center"
              sx={{
                color: `${theme.colors.success.main}`,
                pb: 1
              }}
            >
              67.5%
            </Typography>
          </Box>
        </Stack>
        <Divider
          sx={{
            my: 3
          }}
        />
        <Typography
          component="h6"
          variant="subtitle2"
          fontWeight="bold"
          textAlign="center"
        >
          {format(subDays(new Date(), 2), 'MMMM dd yyyy')}
        </Typography>
        <Stack
          sx={{
            mt: 1,
            px: 4
          }}
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Box
            sx={{
              width: '100%'
            }}
          >
            <Typography
              component="h6"
              variant="h2"
              textAlign="center"
              sx={{
                color: `${theme.colors.info.main}`,
                pb: 1
              }}
            >
              25.0%
            </Typography>
          </Box>
          <Box
            sx={{
              width: '100%'
            }}
          >
            <Typography
              component="h6"
              variant="h2"
              textAlign="center"
              sx={{
                color: `${theme.colors.success.main}`,
                pb: 1
              }}
            >
              75.0%
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default Block2;
