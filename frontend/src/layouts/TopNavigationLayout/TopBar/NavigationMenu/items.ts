import type { ReactNode } from 'react';

import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
import ErrorTwoToneIcon from '@mui/icons-material/ErrorTwoTone';
import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import BackupTableTwoToneIcon from '@mui/icons-material/BackupTableTwoTone';
import SmartToyTwoToneIcon from '@mui/icons-material/SmartToyTwoTone';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';

export interface MenuItem {
  link?: string;
  icon?: ReactNode;
  badge?: string;

  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: '',
    items: [
      {
        name: 'Overview',
        link: '/',
        icon: DesignServicesTwoToneIcon
      },
      {
        name: 'Blueprints',
        icon: BackupTableTwoToneIcon,
        badge: 'v3',
        items: [
          {
            name: 'Extended Sidebar',
            link: '/dashboards/reports',
            badge: 'v3.0'
          },
          {
            name: 'Accent Header',
            link: '/blueprints/accent-header/dashboards/reports',
            badge: ''
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
        link: '/blueprints/top-navigation/dashboards',
        items: [
          {
            name: 'Reports',
            link: '/blueprints/top-navigation/dashboards/reports',
            badge: ''
          },
          {
            name: 'Expenses',
            link: '/blueprints/top-navigation/dashboards/expenses',
            badge: ''
          },
          {
            name: 'Products',
            link: '/blueprints/top-navigation/dashboards/products',
            badge: ''
          },
          {
            name: 'Statistics',
            link: '/blueprints/top-navigation/dashboards/statistics',
            badge: ''
          },
          {
            name: 'Automation',
            link: '/blueprints/top-navigation/dashboards/automation'
          },
          {
            name: 'Analytics',
            link: '/blueprints/top-navigation/dashboards/analytics'
          },
          {
            name: 'Banking',
            link: '/blueprints/top-navigation/dashboards/banking'
          },
          {
            name: 'Commerce',
            link: '/blueprints/top-navigation/dashboards/commerce'
          },
          {
            name: 'Crypto',
            link: '/blueprints/top-navigation/dashboards/crypto'
          },
          {
            name: 'Finance',
            link: '/blueprints/top-navigation/dashboards/finance'
          },
          {
            name: 'Fitness',
            link: '/blueprints/top-navigation/dashboards/fitness'
          }
        ]
      },
      {
        name: 'Auth Pages',
        icon: VpnKeyTwoToneIcon,
        items: [
          {
            name: 'Login Basic',
            link: '/auth/login/basic?demo=true'
          },
          {
            name: 'Login Cover',
            link: '/auth/login/cover?demo=true'
          },
          {
            name: 'Register Basic',
            link: '/auth/register/basic?demo=true'
          },
          {
            name: 'Register Cover',
            link: '/auth/register/cover?demo=true'
          },
          {
            name: 'Register Wizard',
            link: '/auth/register/wizard?demo=true'
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
      },
      {
        name: '',
        icon: MenuTwoToneIcon,
        link: '',
        items: [
          {
            name: 'Doctors',
            link: '/blueprints/top-navigation/dashboards/healthcare/doctor'
          },
          {
            name: 'Hospital',
            link: '/blueprints/top-navigation/dashboards/healthcare/hospital'
          },
          {
            name: 'Helpdesk',
            link: '/blueprints/top-navigation/dashboards/helpdesk'
          },
          {
            name: 'Learning',
            link: '/blueprints/top-navigation/dashboards/learning'
          },
          {
            name: 'Monitoring',
            link: '/blueprints/top-navigation/dashboards/monitoring'
          },
          {
            name: 'Tasks',
            link: '/blueprints/top-navigation/dashboards/tasks'
          }
        ]
      }
    ]
  }
];

export default menuItems;
