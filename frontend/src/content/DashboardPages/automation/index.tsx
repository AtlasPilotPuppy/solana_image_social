import { useTranslation } from 'react-i18next';

import { Grid, Tooltip, Box, Typography, IconButton } from '@mui/material';

import Weather from 'src/content/Dashboards/Automation/Weather';
import Devices from 'src/content/Dashboards/Automation/Devices';
import Scenes from 'src/content/Dashboards/Automation/Scenes';
import VideoCameras from 'src/content/Dashboards/Automation/VideoCameras';
import PowerConsumption from 'src/content/Dashboards/Automation/PowerConsumption';
import Users from 'src/content/Dashboards/Automation/Users';
import Search from 'src/content/Dashboards/Automation/Search';
import Sensors from 'src/content/Dashboards/Automation/Sensors';
import Thermostat from 'src/content/Dashboards/Automation/Thermostat';
import EnergySaving from 'src/content/Dashboards/Automation/EnergySaving';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

function DashboardAutomationContent() {
  const { t }: { t: any } = useTranslation();

  return (
    <>
      <Box p={4}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
          columns={12}
        >
          <Grid item xs={12} lg={8}>
            <Weather />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Search />
              </Grid>
              <Grid item xs={12} md={6} lg={12}>
                <Users />
              </Grid>
              <Grid item xs={12} md={6} lg={12}>
                <Scenes />
              </Grid>
              <Grid item xs={12} xl={12}>
                <EnergySaving />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Devices />
          </Grid>
          <Grid item xs={12} lg={6}>
            <PowerConsumption />
          </Grid>
          <Grid item xs={12} lg={8}>
            <Box
              mb={2}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h3">Control panel</Typography>
              <Tooltip arrow placement="top" title={t('Add another sensor')}>
                <IconButton size="large" color="primary">
                  <AddTwoToneIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={5}>
                <Sensors />
              </Grid>
              <Grid item xs={12} md={7}>
                <Thermostat />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <VideoCameras />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default DashboardAutomationContent;
