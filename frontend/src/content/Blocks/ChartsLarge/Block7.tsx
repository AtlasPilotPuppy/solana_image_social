import {
  Box,
  Card,
  Typography,
  Divider,
  List,
  ListItem,
  Button,
  LinearProgress,
  alpha,
  Grid,
  styled,
  useTheme,
  linearProgressClasses
} from '@mui/material';
import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';

import { useTranslation } from 'react-i18next';
import CloudDownloadTwoToneIcon from '@mui/icons-material/CloudDownloadTwoTone';
import Block7Chart from './Block7Chart';

const LinearProgressError = styled(LinearProgress)(
  ({ theme }) => `
        height: 6px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.error.main, 0.1)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.error.main};
        }
    `
);

const LinearProgressSuccess = styled(LinearProgress)(
  ({ theme }) => `
        height: 6px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.success.main, 0.1)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.success.main};
        }
    `
);

const LinearProgressInfo = styled(LinearProgress)(
  ({ theme }) => `
        height: 6px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.info.main, 0.1)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.info.main};
        }
    `
);

const LinearProgressPrimary = styled(LinearProgress)(
  ({ theme }) => `
        height: 6px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.primary.main, 0.1)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.primary.main};
        }
    `
);

const Block7ChartWrapper = styled(Block7Chart)(
  () => `
          height: 267px;
  `
);

const CardWrapper = styled(Card)(
  ({ theme }) => `
      background: ${alpha(theme.colors.alpha.black[10], 0.08)};
  `
);

function Block7() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();

  const visitors = {
    current: [765, 1265, 653, 1225, 875, 986]
  };

  const generic = {
    month: {
      labels: ['2018', '2019', '2020', '2021', '2022', '2023']
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
            {t('Revenue progress')}
          </Typography>
          <Typography
            component="div"
            fontWeight="normal"
            color="text.secondary"
            variant="h5"
          >
            {t('Our company revenues, split by progress')}
          </Typography>
        </Box>
        <Button
          size="small"
          color="secondary"
          variant="outlined"
          startIcon={<CloudDownloadTwoToneIcon />}
        >
          {t('Download report')}
        </Button>
      </Box>
      <Divider />
      <Box p={3}>
        <Grid container spacing={6}>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <List
              sx={{
                width: '100%'
              }}
              disablePadding
            >
              <ListItem
                disableGutters
                sx={{
                  display: 'block'
                }}
              >
                <Box pb={0.5}>
                  <Typography
                    component="span"
                    variant="h3"
                    sx={{
                      pr: 1
                    }}
                  >
                    54,695
                  </Typography>
                  <Typography component="span" variant="subtitle2">
                    dribbble.com
                  </Typography>
                </Box>
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
                    <LinearProgressError variant="determinate" value={34} />
                  </Box>
                  <Box
                    sx={{
                      minWidth: 35
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: `${theme.colors.error.main}`
                      }}
                    >
                      34%
                    </Typography>
                  </Box>
                </Box>
              </ListItem>
              <ListItem
                disableGutters
                sx={{
                  display: 'block'
                }}
              >
                <Box pb={0.5}>
                  <Typography
                    component="span"
                    variant="h3"
                    sx={{
                      pr: 1
                    }}
                  >
                    12,543
                  </Typography>
                  <Typography component="span" variant="subtitle2">
                    amazon.com
                  </Typography>
                </Box>
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
                    <LinearProgressSuccess variant="determinate" value={21} />
                  </Box>
                  <Box
                    sx={{
                      minWidth: 35
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: `${theme.colors.success.main}`
                      }}
                    >
                      21%
                    </Typography>
                  </Box>
                </Box>
              </ListItem>

              <ListItem
                disableGutters
                sx={{
                  display: 'block'
                }}
              >
                <Box pb={0.5}>
                  <Typography
                    component="span"
                    variant="h3"
                    sx={{
                      pr: 1
                    }}
                  >
                    6,374
                  </Typography>
                  <Typography component="span" variant="subtitle2">
                    youtube.com
                  </Typography>
                </Box>
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
                    <LinearProgressInfo variant="determinate" value={15} />
                  </Box>
                  <Box
                    sx={{
                      minWidth: 35
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: `${theme.colors.info.main}`
                      }}
                    >
                      15%
                    </Typography>
                  </Box>
                </Box>
              </ListItem>

              <ListItem
                disableGutters
                sx={{
                  display: 'block'
                }}
              >
                <Box pb={0.5}>
                  <Typography
                    component="span"
                    variant="h3"
                    sx={{
                      pr: 1
                    }}
                  >
                    65,492
                  </Typography>
                  <Typography component="span" variant="subtitle2">
                    facebook.com
                  </Typography>
                </Box>
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
                    <LinearProgressPrimary variant="determinate" value={65} />
                  </Box>
                  <Box
                    sx={{
                      minWidth: 35
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: `${theme.colors.primary.main}`
                      }}
                    >
                      65%
                    </Typography>
                  </Box>
                </Box>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={7}>
            <CardWrapper
              sx={{
                p: 3
              }}
            >
              <Box
                sx={{
                  height: 267
                }}
              >
                <Block7ChartWrapper
                  data={visitors}
                  labels={generic.month.labels}
                />
              </Box>
            </CardWrapper>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box textAlign="center" p={3}>
        <Button variant="contained" endIcon={<ArrowForwardTwoToneIcon />}>
          {t('View complete report')}
        </Button>
      </Box>
    </Card>
  );
}

export default Block7;
