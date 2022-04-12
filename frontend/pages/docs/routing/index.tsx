import { Container, Typography, Grid } from '@mui/material';
import type { ReactElement } from 'react';
import DocsLayout from 'src/layouts/DocsLayout';
import Head from 'next/head';
import PageHeader from 'src/components/PageHeaderDocs';
import { Prism } from 'react-syntax-highlighter';
import a11yDark from 'react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark';

function Routing() {
  const routingExample = `├── account
  │   ├── login-basic
  │   │   └── index.tsx
  │   ├── login-cover
  │   │   └── index.tsx
  │   ├── recover-password
  │   │   └── index.tsx
  │   ├── register-basic
  │   │   └── index.tsx
  │   ├── register-cover
  │   │   └── index.tsx
  │   └── register-wizard
  │       └── index.tsx
  ├── applications
  │   ├── file-manager
  │   │   └── index.tsx
  │   ├── jobs-platform
  │   │   └── index.tsx
  │   ├── messenger
  │   │   └── index.tsx
  │   └── projects-board
  │       └── index.tsx
  ├── dashboards
  │   ├── analytics
  │   │   └── index.tsx
  │   ├── automation
  │   │   └── index.tsx
  │   ├── banking
  │   │   └── index.tsx
  │   ├── commerce
  │   │   └── index.tsx
  │   ├── crypto
  │   │   └── index.tsx
  │   ├── finance
  │   │   └── index.tsx
  │   ├── fitness
  │   │   └── index.tsx
  │   ├── healthcare
  │   │   ├── doctor
  │   │   │   └── index.tsx
  │   │   └── hospital
  │   │       └── index.tsx
  │   ├── helpdesk
  │   │   └── index.tsx
  │   ├── learning
  │   │   └── index.tsx
  │   ├── monitoring
  │   │   └── index.tsx
  │   └── tasks
  │       └── index.tsx
  ├── management
  │   ├── commerce
  │   │   ├── products
  │   │   │   ├── create
  │   │   │   │   └── index.tsx
  │   │   │   ├── [productId].tsx
  │   │   │   └── index.tsx
  │   │   └── shop
  │   │       └── index.tsx
  │   ├── invoices
  │   │   ├── [invoiceId].tsx
  │   │   └── index.tsx
  │   ├── projects
  │   │   └── index.tsx
  │   └── users
  │       ├── [userId].tsx
  │       └── index.tsx
  ├── status
  │   ├── 404
  │   │   └── index.tsx
  │   ├── 500
  │   │   └── index.tsx
  │   ├── coming-soon
  │   │   └── index.tsx
  │   └── maintenance
  │       └── index.tsx
  ├── _app.tsx
  ├── _document.tsx
  ├── 404.tsx
  └── index.tsx`;
  const sidebarExample = `import type { ReactNode } from 'react';

  import AnalyticsTwoToneIcon from '@mui/icons-material/AnalyticsTwoTone';
  import HealthAndSafetyTwoToneIcon from '@mui/icons-material/HealthAndSafetyTwoTone';
  import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';
  import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
  import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
  import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
  
  export interface MenuItem {
    link?: string;
    icon?: ReactNode;
    badge?: string;
    badgeTooltip?: string;
  
    items?: MenuItem[];
    name: string;
  }
  
  export interface MenuItems {
    items: MenuItem[];
    heading: string;
  }
  
  const menuItems: MenuItems[] = [
    {
      heading: 'General',
      items: [
        {
          name: 'Blueprints',
          icon: BackupTableTwoToneIcon,
          items: [
            {
              name: 'Extended Sidebar',
              link: '/dashboards/reports',
              badge: 'v3.0',
              badgeTooltip: 'Added in version 3.0'
            },
            {
              name: 'Accent Header',
              link: '/blueprints/accent-header/dashboards/reports',
              badge: '',
              badgeTooltip: 'Updated'
            },
            {
              name: 'Accent Sidebar',
              link: '/blueprints/accent-sidebar/dashboards/reports'
            }
          ]
        },
        {
          name: 'Dashboards',
          icon: SmartToyTwoToneIcon,
          link: '/dashboards',
          items: [
            {
              name: 'Reports',
              link: '/dashboards/reports',
              badge: '',
              badgeTooltip: 'Reports Dashboard - version 3.0'
            },
            {
              name: 'Automation',
              link: '/dashboards/automation'
            },
            {
              name: 'Healthcare',
              link: '/dashboards/healthcare',
              items: [
                {
                  name: 'Doctors',
                  link: '/dashboards/healthcare/doctor'
                },
                {
                  name: 'Hospital',
                  link: '/dashboards/healthcare/hospital'
                }
              ]
            },
            {
              name: 'Helpdesk',
              link: '/dashboards/helpdesk'
            }
          ]
        },
        {
          name: 'Data Display',
          icon: HealthAndSafetyTwoToneIcon,
          badge: '',
          link: '/blocks',
          badgeTooltip: 'Tokyo 3.0 contains over 250 new data display blocks',
          items: [
            {
              name: 'Charts large',
              link: '/blocks/charts-large'
            }
          ]
        },
        {
          name: 'Applications',
          link: '/applications',
          icon: AnalyticsTwoToneIcon,
          items: [
            {
              name: 'Calendar',
              link: '/applications/calendar'
            }
          ]
        }
      ]
    },
    {
      heading: 'Management',
      items: [
        {
          name: 'Projects',
          link: '/management/projects',
          icon: AccountTreeTwoToneIcon
        },
        {
          name: 'Invoices',
          link: '/management/invoices',
          icon: ReceiptTwoToneIcon,
          items: [
            {
              name: 'List',
              link: '/management/invoices'
            },
            {
              name: 'Details',
              link: '/management/invoices/single/1'
            }
          ]
        }
      ]
    },
    {
      heading: 'Extra Pages',
      items: [
        {
          name: 'Auth Pages',
          icon: VpnKeyTwoToneIcon,
          items: [
            {
              name: 'Login',
              items: [
                {
                  name: 'Basic',
                  link: '/auth/login/basic?demo=true'
                },
                {
                  name: 'Cover',
                  link: '/auth/login/cover?demo=true'
                }
              ]
            },
            {
              name: 'Register',
              items: [
                {
                  name: 'Basic',
                  link: '/auth/register/basic?demo=true'
                },
                {
                  name: 'Cover',
                  link: '/auth/register/cover?demo=true'
                },
                {
                  name: 'Wizard',
                  link: '/auth/register/wizard?demo=true'
                }
              ]
            },
            {
              name: 'Recover Password',
              link: '/auth/recover-password?demo=true'
            }
          ]
        },
        {
          name: 'Status',
          icon: ErrorTwoToneIcon,
          items: [
            {
              name: 'Error 404',
              link: '/status/404'
            },
            {
              name: 'Error 500',
              link: '/status/500'
            },
            {
              name: 'Maintenance',
              link: '/status/maintenance'
            },
            {
              name: 'Coming Soon',
              link: '/status/coming-soon'
            }
          ]
        }
      ]
    },
    {
      heading: 'Foundation',
      items: [
        {
          name: 'Overview',
          link: '/',
          icon: DesignServicesTwoToneIcon
        },
        {
          name: 'Documentation',
          icon: SupportTwoToneIcon,
          link: '/docs'
        }
      ]
    }
  ];
  
  export default menuItems;
  `;

  return (
    <>
      <Head>
        <title>Routing - Tokyo NextJS Typescript Admin Dashboard</title>
      </Head>
      <Container maxWidth={false}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <PageHeader heading="Routing" subheading=""></PageHeader>
          </Grid>
          <Grid item xs={12}>
            <Typography paragraph>
              In Next.js, a page is a React Component exported from a .js, .jsx,
              .ts, or .tsx file in the pages directory. Each page is associated
              with a route based on its file name.
            </Typography>
            <Typography paragraph>
              Example: If you create <code>pages/about.tsx</code> or{' '}
              <code>pages/About/index.tsx</code> that exports a React component
              like below, it will be accessible at <code>/about</code>.
            </Typography>
            <Typography paragraph>
              Any route like /post/1, /post/abc, etc. will be matched by{' '}
              <code>pages/post/[pid].js</code>. The matched path parameter will
              be sent as a query parameter to the page, and it will be merged
              with the other query parameters.
            </Typography>
            <Typography paragraph>
              The example below is a sample from the <code>/pages</code> folder.
            </Typography>
            <Prism
              showLineNumbers
              wrapLines
              language="javascript"
              style={a11yDark}
            >
              {routingExample}
            </Prism>
            <br />
            <Typography variant="h2" sx={{ mb: 2 }}>
              Sidebar Navigation
            </Typography>
            <Typography paragraph>
              To modify the current sidebar navigation, edit the following file{' '}
              <code>
                src\layouts\ExtendedSidebarLayout\Sidebar\SidebarMenu\items.ts
              </code>
              . It contains an items array used for building the sidebar menu
              tree. The 'link' parameter represents the page URL defined based
              on the <code>/pages</code> folder structure.
            </Typography>
            <Prism
              showLineNumbers
              wrapLines
              language="javascript"
              style={a11yDark}
            >
              {sidebarExample}
            </Prism>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Routing;

Routing.getLayout = function getLayout(page: ReactElement) {
  return <DocsLayout>{page}</DocsLayout>;
};
