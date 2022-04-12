import {
  Box,
  IconButton,
  Badge,
  Tooltip,
  TooltipProps,
  alpha,
  tooltipClasses,
  styled,
  useTheme
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import EventTwoToneIcon from '@mui/icons-material/EventTwoTone';
import PowerSettingsNewTwoToneIcon from '@mui/icons-material/PowerSettingsNewTwoTone';
import SmsTwoToneIcon from '@mui/icons-material/SmsTwoTone';
import Link from 'src/components/Link';
import { useAuth } from 'src/hooks/useAuth';
import { useRouter } from 'next/router';

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.colors.alpha.trueWhite[100],
    color: theme.palette.getContrastText(theme.colors.alpha.trueWhite[100]),
    boxShadow: theme.shadows[24],
    fontWeight: 'bold',
    fontSize: theme.typography.pxToRem(12)
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.colors.alpha.trueWhite[100]
  }
}));

function SidebarFooter() {
  const { t }: { t: any } = useTranslation();
  const theme = useTheme();
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = async (): Promise<void> => {
    try {
      await logout();
      router.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box
      sx={{
        height: 60
      }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <LightTooltip placement="top" arrow title={t('Events Calendar')}>
        <IconButton
          sx={{
            background: `${theme.colors.alpha.trueWhite[10]}`,
            color: `${theme.colors.alpha.trueWhite[70]}`,
            transition: `${theme.transitions.create(['all'])}`,

            '&:hover': {
              background: `${alpha(theme.colors.alpha.trueWhite[100], 0.2)}`,
              color: `${theme.colors.alpha.trueWhite[100]}`
            }
          }}
          href="/applications/calendar"
          component={Link}
        >
          <EventTwoToneIcon fontSize="small" />
        </IconButton>
      </LightTooltip>
      <LightTooltip placement="top" arrow title={t('Messenger')}>
        <Badge
          color="success"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          sx={{
            '.MuiBadge-badge': {
              animation: 'pulse 1s infinite',
              top: '5%',
              transition: `${theme.transitions.create(['all'])}`
            }
          }}
          variant="dot"
          overlap="circular"
        >
          <IconButton
            href="/applications/messenger"
            component={Link}
            sx={{
              background: `${theme.colors.alpha.trueWhite[10]}`,
              color: `${theme.colors.alpha.trueWhite[70]}`,
              transition: `${theme.transitions.create(['all'])}`,

              '&:hover': {
                background: `${alpha(theme.colors.alpha.trueWhite[100], 0.2)}`,
                color: `${theme.colors.alpha.trueWhite[100]}`
              },
              mx: 1
            }}
          >
            <SmsTwoToneIcon fontSize="small" />
          </IconButton>
        </Badge>
      </LightTooltip>
      <LightTooltip placement="top" arrow title={t('Logout')}>
        <IconButton
          sx={{
            background: `${theme.colors.alpha.trueWhite[10]}`,
            color: `${theme.colors.alpha.trueWhite[70]}`,
            transition: `${theme.transitions.create(['all'])}`,

            '&:hover': {
              background: `${alpha(theme.colors.alpha.trueWhite[100], 0.2)}`,
              color: `${theme.colors.alpha.trueWhite[100]}`
            }
          }}
          onClick={handleLogout}
        >
          <PowerSettingsNewTwoToneIcon fontSize="small" />
        </IconButton>
      </LightTooltip>
    </Box>
  );
}

export default SidebarFooter;
