import Head from 'next/head';

import { useState, useEffect, useCallback } from 'react';

import ExtendedSidebarLayout from 'src/layouts/ExtendedSidebarLayout';
import { Authenticated } from 'src/components/Authenticated';

import PageHeader from 'src/content/Management/Projects/PageHeader';
import Footer from 'src/components/Footer';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import { Grid } from '@mui/material';
import { useRefMounted } from 'src/hooks/useRefMounted';
import type { Project } from 'src/models/project';
import { projectsApi } from 'src/mocks/projects';
import Results from 'src/content/Management/Projects/Results';

function ManagementProjects() {
  const isMountedRef = useRefMounted();
  const [projects, setProjects] = useState<Project[]>([]);

  const getProjects = useCallback(async () => {
    try {
      const response = await projectsApi.getProjects();

      if (isMountedRef()) {
        setProjects(response);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getProjects();
  }, [getProjects]);

  return (
    <>
      <Head>
        <title>Projects - Management</title>
      </Head>
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
        <Grid item xs={12}>
          <Results projects={projects} />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

ManagementProjects.getLayout = (page) => (
  <Authenticated>
    <ExtendedSidebarLayout>{page}</ExtendedSidebarLayout>
  </Authenticated>
);

export default ManagementProjects;
