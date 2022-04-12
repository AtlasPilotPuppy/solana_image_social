import {
  Container,
  Grid,
  Typography,
  ListItemText,
  ListItem,
  List,
  Divider
} from '@mui/material';
import type { ReactElement } from 'react';
import DocsLayout from 'src/layouts/DocsLayout';
import Head from 'next/head';
import PageHeader from 'src/components/PageHeaderDocs';
import { Prism } from 'react-syntax-highlighter';
import a11yDark from 'react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark';

function Installation() {
  const npmInstall = `// the -g parameter install npm globally on your system

npm install -g npm`;

  const npmDeps = `cd application_folder_name

npm install`;

  const devBuild = `yarn dev  
  yarn run v1.15.2
  $ next
  ready - started server on 0.0.0.0:3000, url: http://localhost:3000
  info  - Using webpack 5. Reason: Enabled by default https://nextjs.org/docs/messages/webpack5
  event - compiled successfully
  event - build page: /docs/installation
  wait  - compiling...
  event - compiled successfully`;

  const devRunBuild = `yarn dev`;
  const prodRunBuild = `yarn build`;

  const prodBuildFinish = `yarn build
  yarn run v1.15.2
  $ next build
  info  - Using webpack 5. Reason: Enabled by default https://nextjs.org/docs/messages/webpack5
  info  - Checking validity of types  
  warn  - No ESLint configuration detected. Run next lint to begin setup
  info  - Creating an optimized production build  
  info  - Compiled successfully
  info  - Collecting page data  
  [ ===] info  - Generating static pages (0/147)
  info  - Generating static pages (147/147)
  info  - Finalizing page optimization  
  
  Page                                           Size     First Load JS
  ┌ ○ /                                          18.9 kB         178 kB
  ├   /_app                                      0 B             96 kB
  ├ ○ /404 (2076 ms)                             4.17 kB         117 kB
  ├ ○ /account/login-basic                       3.73 kB         172 kB
  └ ○ /status/maintenance                        2.27 kB         124 kB
  + First Load JS shared by all                  296 kB
    ├ chunks/framework.1c2887.js                 47.1 kB
    ├ chunks/main.2fa614.js                      24.5 kB
    ├ chunks/pages/_app.c0be21.js                222 kB
    ├ chunks/webpack.a53636.js                   2.41 kB
    └ css/748d52ef6c5f93f3764e.css               439 B
  
  Done in 64.25s.`;

  const prodRunServer = `yarn start`;

  const prodServerFinish = `yarn start
  yarn run v1.15.2
  $ next start
  ready - started server on 0.0.0.0:3000, url: http://localhost:3000`;

  return (
    <>
      <Head>
        <title>Installation - Tokyo NextJS Typescript Admin Dashboard</title>
      </Head>
      <Container maxWidth={false}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <PageHeader heading="Installation" subheading=""></PageHeader>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" sx={{ mb: 2 }}>
              Setup
            </Typography>
            <Typography paragraph>
              Follow the instructions below in order to install the project
              dependencies and start a new browser instance.
            </Typography>
            <List>
              <ListItem sx={{ my: 2 }}>
                <ListItemText
                  primaryTypographyProps={{ variant: 'h4', gutterBottom: true }}
                  secondaryTypographyProps={{ variant: 'subtitle2' }}
                  primary="Install Node.js"
                  secondary="Before proceeding you will need to have Node.js installed on your system. Download and install the latest stable version from https://nodejs.org/"
                ></ListItemText>
              </ListItem>
              <Divider component="li" />
              <ListItem sx={{ my: 2 }}>
                <ListItemText
                  primaryTypographyProps={{ variant: 'h4', gutterBottom: true }}
                  secondaryTypographyProps={{ variant: 'subtitle2' }}
                  primary="Install NPM"
                  secondary={
                    <>
                      You will need to have the last stable version of NPM
                      available. More informations about this package manager
                      can be found at https://www.npmjs.com/
                      <Typography variant="h4" sx={{ mt: 2 }} gutterBottom>
                        To install NPM run the following in a command line:
                      </Typography>
                      <Prism wrapLines language="javascript" style={a11yDark}>
                        {npmInstall}
                      </Prism>
                    </>
                  }
                ></ListItemText>
              </ListItem>
              <Divider component="li" />
              <ListItem sx={{ my: 2 }}>
                <ListItemText
                  primaryTypographyProps={{ variant: 'h4', gutterBottom: true }}
                  secondaryTypographyProps={{ variant: 'subtitle2' }}
                  primary="Install Project Dependencies"
                  secondary={
                    <>
                      The project dependencies are defined in the package.json
                      file. Run the command below inside the root folder to
                      install the dependencies.
                      <Prism wrapLines language="javascript" style={a11yDark}>
                        {npmDeps}
                      </Prism>
                    </>
                  }
                ></ListItemText>
              </ListItem>
            </List>
            <br />
            <Typography variant="h2" sx={{ mb: 2 }}>
              Development Server
            </Typography>
            <Typography paragraph>
              After finishing with the dependencies install process, you can
              start a local development server and view the project in your
              browser.
            </Typography>
            <Typography paragraph>
              Inside the project folder run the following command. It takes a
              few minutes to complete the initial development build.
            </Typography>
            <Prism wrapLines language="javascript" style={a11yDark}>
              {devRunBuild}
            </Prism>
            <br />
            <Typography paragraph>
              When finished, a browser window will be opened at
              http://localhost:3000 and the terminal will show a message similar
              to the one below:
            </Typography>
            <Prism wrapLines language="javascript" style={a11yDark}>
              {devBuild}
            </Prism>
            <br />
            <Typography variant="h2" sx={{ mb: 2 }}>
              Production Build
            </Typography>
            <Typography paragraph>
              When ready to launch in production your new project, run the
              following command in a command line opened in the project folder:
            </Typography>
            <Prism wrapLines language="javascript" style={a11yDark}>
              {prodRunBuild}
            </Prism>
            <br />
            <Typography paragraph>
              This will create a production-ready build of your project. If the
              build completed successfully, you will see in your terminal window
              a message similar to the one below:
            </Typography>
            <Prism wrapLines language="javascript" style={a11yDark}>
              {prodBuildFinish}
            </Prism>
            <br />
            <Typography variant="h2" sx={{ mb: 2 }}>
              Production Server
            </Typography>
            <Typography paragraph>
              After the build is completed successfully you can run the
              following command to start a starts a Next.js production server
              and test it out before deployment.
            </Typography>
            <Prism wrapLines language="javascript" style={a11yDark}>
              {prodRunServer}
            </Prism>
            <Typography paragraph>
              After creating a production server you should see a message
              similar to the one below:
            </Typography>
            <Prism wrapLines language="javascript" style={a11yDark}>
              {prodServerFinish}
            </Prism>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Installation;

Installation.getLayout = function getLayout(page: ReactElement) {
  return <DocsLayout>{page}</DocsLayout>;
};
