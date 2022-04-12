import PageHeader from 'src/content/Dashboards/Monitoring/PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import { Grid } from '@mui/material';

import ResourcesAlarm from 'src/content/Dashboards/Monitoring/ResourcesAlarm';
import HealthStatus from 'src/content/Dashboards/Monitoring/HealthStatus';
import DatacenterClusters from 'src/content/Dashboards/Monitoring/DatacenterClusters';
import VirtualServers from 'src/content/Dashboards/Monitoring/VirtualServers';
import ActiveServers from 'src/content/Dashboards/Monitoring/ActiveServers';
import DataCenters from 'src/content/Dashboards/Monitoring/DataCenters';
import StorageUsage from 'src/content/Dashboards/Monitoring/StorageUsage';
import MemoryUsage from 'src/content/Dashboards/Monitoring/MemoryUsage';
import CpuUsage from 'src/content/Dashboards/Monitoring/CpuUsage';

function DashboardMonitoringContent() {
  return (
    <>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>

      <Grid
        sx={{ px: 4 }}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
      >
        <Grid item xs={12} md={6}>
          <ResourcesAlarm />
        </Grid>
        <Grid item xs={12} md={6}>
          <HealthStatus />
        </Grid>
        <Grid item xs={12}>
          <DatacenterClusters />
        </Grid>
        <Grid item xs={12}>
          <VirtualServers />
        </Grid>
        <Grid item xs={12}>
          <ActiveServers />
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <DataCenters />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <CpuUsage />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={6} md={12}>
              <StorageUsage />
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
              <MemoryUsage />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}

export default DashboardMonitoringContent;
