import type { ReactNode } from 'react';

import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
import ErrorTwoToneIcon from '@mui/icons-material/ErrorTwoTone';
import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import SupportTwoToneIcon from '@mui/icons-material/SupportTwoTone';
import BackupTableTwoToneIcon from '@mui/icons-material/BackupTableTwoTone';
import SmartToyTwoToneIcon from '@mui/icons-material/SmartToyTwoTone';

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
          },
          {
            name: 'Boxed Sidebar',
            link: '/blueprints/boxed-sidebar/dashboards/reports'
          },
          {
            name: 'Collapsed Sidebar',
            link: '/blueprints/collapsed-sidebar/dashboards/reports'
          },
          {
            name: 'Bottom Navigation',
            link: '/blueprints/bottom-navigation/dashboards/reports'
          },
          {
            name: 'Top Navigation',
            link: '/blueprints/top-navigation/dashboards/reports'
          }
        ]
      },
      {
        name: 'Dashboards',
        icon: SmartToyTwoToneIcon,
        link: '/blueprints/boxed-sidebar/dashboards',
        items: [
          {
            name: 'Reports',
            link: '/blueprints/boxed-sidebar/dashboards/reports',
            badge: '',
            badgeTooltip: 'Reports Dashboard - version 3.0'
          },
          {
            name: 'Expenses',
            link: '/blueprints/boxed-sidebar/dashboards/expenses',
            badge: '',
            badgeTooltip: 'Expenses Dashboard - version 3.0'
          },
          {
            name: 'Products',
            link: '/blueprints/boxed-sidebar/dashboards/products',
            badge: '',
            badgeTooltip: 'Products Dashboard - version 3.0'
          },
          {
            name: 'Statistics',
            link: '/blueprints/boxed-sidebar/dashboards/statistics',
            badge: '',
            badgeTooltip: 'Statistics Dashboard - version 3.0'
          },
          {
            name: 'Automation',
            link: '/blueprints/boxed-sidebar/dashboards/automation'
          },
          {
            name: 'Analytics',
            link: '/blueprints/boxed-sidebar/dashboards/analytics'
          },
          {
            name: 'Banking',
            link: '/blueprints/boxed-sidebar/dashboards/banking'
          },
          {
            name: 'Commerce',
            link: '/blueprints/boxed-sidebar/dashboards/commerce'
          },
          {
            name: 'Crypto',
            link: '/blueprints/boxed-sidebar/dashboards/crypto'
          },
          {
            name: 'Finance',
            link: '/blueprints/boxed-sidebar/dashboards/finance'
          },
          {
            name: 'Fitness',
            link: '/blueprints/boxed-sidebar/dashboards/fitness'
          },
          {
            name: 'Healthcare',
            link: '/blueprints/boxed-sidebar/dashboards/healthcare',
            items: [
              {
                name: 'Doctors',
                link: '/blueprints/boxed-sidebar/dashboards/healthcare/doctor'
              },
              {
                name: 'Hospital',
                link: '/blueprints/boxed-sidebar/dashboards/healthcare/hospital'
              }
            ]
          },
          {
            name: 'Helpdesk',
            link: '/blueprints/boxed-sidebar/dashboards/helpdesk'
          },
          {
            name: 'Learning',
            link: '/blueprints/boxed-sidebar/dashboards/learning'
          },
          {
            name: 'Monitoring',
            link: '/blueprints/boxed-sidebar/dashboards/monitoring'
          },
          {
            name: 'Tasks',
            link: '/blueprints/boxed-sidebar/dashboards/tasks'
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
