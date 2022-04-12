import {
  Box,
  Card,
  Tooltip,
  Typography,
  Container,
  Alert,
  styled
} from '@mui/material';
import Head from 'next/head';
import { useAuth } from 'src/hooks/useAuth';
import { Guest } from 'src/components/Guest';
import { LoginAuth0 } from 'src/content/Auth/Login/LoginAuth0';
import { LoginFirebaseAuth } from 'src/content/Auth/Login/LoginFirebaseAuth';
import { LoginJWT } from 'src/content/Auth/Login/LoginJWT';
import { LoginAmplify } from 'src/content/Auth/Login/LoginAmplify';
import BaseLayout from 'src/layouts/BaseLayout';
import Link from 'src/components/Link';
import { useRouter } from 'next/router';

import { useTranslation } from 'react-i18next';
import Logo from 'src/components/Logo';
import Scrollbar from 'src/components/Scrollbar';

const icons = {
  Auth0: '/static/images/logo/auth0.svg',
  FirebaseAuth: '/static/images/logo/firebase.svg',
  JWT: '/static/images/logo/jwt.svg',
  Amplify: '/static/images/logo/amplify.svg'
};

const Content = styled(Box)(
  () => `
    display: flex;
    flex: 1;
    width: 100%;
`
);

const MainContent = styled(Box)(
  () => `
  padding: 0 0 0 440px;
  width: 100%;
  display: flex;
  align-items: center;
`
);

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    background: ${theme.colors.alpha.white[100]};
    width: 440px;
`
);

const SidebarContent = styled(Box)(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  padding: ${theme.spacing(6)};
`
);

const CardImg = styled(Card)(
  ({ theme }) => `
    border-radius: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 1px solid ${theme.colors.alpha.black[10]};
    transition: ${theme.transitions.create(['border'])};
    position: absolute;

    &:hover {
      border-color: ${theme.colors.primary.main};
    }
`
);

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(33)};
`
);

function LoginCover() {
  const { method } = useAuth() as any;
  const { t }: { t: any } = useTranslation();

  const router = useRouter();
  const { demo } = router.query;

  return (
    <>
      <Head>
        <title>Login - Cover</title>
      </Head>
      <Content>
        <SidebarWrapper
          sx={{
            display: { xs: 'none', md: 'flex' }
          }}
        >
          <Scrollbar>
            <SidebarContent>
              <Logo />
              <Box mt={6}>
                <TypographyH1
                  variant="h1"
                  sx={{
                    mb: 7
                  }}
                >
                  {t('Multiple auth methods included')}
                </TypographyH1>
                <Box
                  sx={{
                    position: 'relative',
                    width: 300,
                    height: 120
                  }}
                >
                  <Tooltip arrow placement="top" title="Auth0">
                    <CardImg
                      sx={{
                        width: 80,
                        height: 80,
                        left: -20,
                        top: -40
                      }}
                    >
                      <img width={40} alt="Auth0" src={icons['Auth0']} />
                    </CardImg>
                  </Tooltip>
                  <Tooltip arrow placement="top" title="Firebase">
                    <CardImg
                      sx={{
                        width: 90,
                        height: 90,
                        left: 70
                      }}
                    >
                      <img
                        width={50}
                        alt="Firebase"
                        src={icons['FirebaseAuth']}
                      />
                    </CardImg>
                  </Tooltip>
                  <Tooltip arrow placement="top" title="JSON Web Token">
                    <CardImg
                      sx={{
                        width: 110,
                        height: 110,
                        top: -30,
                        left: 170
                      }}
                    >
                      <img width={80} alt="JSON Web Token" src={icons['JWT']} />
                    </CardImg>
                  </Tooltip>
                  <Tooltip arrow placement="top" title="AWS Amplify">
                    <CardImg
                      sx={{
                        width: 70,
                        height: 70,
                        bottom: 0,
                        right: -55
                      }}
                    >
                      <img width={50} alt="Amplify" src={icons['Amplify']} />
                    </CardImg>
                  </Tooltip>
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    my: 3
                  }}
                >
                  {t(
                    'Choose between JSON Web Token, Firebase, AWS Amplify or Auth0. Regular login/register functionality is also available.'
                  )}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.primary"
                  fontWeight="bold"
                >
                  {t('Want to switch auth methods?')}
                </Typography>
                <Typography variant="subtitle1">
                  {t(
                    'It only takes seconds. There is a documentation section showing how to do exactly that'
                  )}
                  . <Link href="/docs">Read docs</Link>
                </Typography>
              </Box>
            </SidebarContent>
          </Scrollbar>
        </SidebarWrapper>
        <MainContent>
          <Container
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column'
            }}
            maxWidth="sm"
          >
            <Card
              sx={{
                p: 4,
                my: 4
              }}
            >
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  sx={{
                    mb: 1
                  }}
                >
                  {t('Sign in')}
                </Typography>
                <Typography
                  variant="h4"
                  color="text.secondary"
                  fontWeight="normal"
                  sx={{
                    mb: 3
                  }}
                >
                  {t('Fill in the fields below to sign into your account.')}
                </Typography>
              </Box>
              {method === 'Auth0' && <LoginAuth0 />}
              {method === 'FirebaseAuth' && <LoginFirebaseAuth />}
              {method === 'JWT' && <LoginJWT />}
              {method === 'Amplify' && <LoginAmplify />}
              <Box my={4}>
                <Typography
                  component="span"
                  variant="subtitle2"
                  color="text.primary"
                  fontWeight="bold"
                >
                  {t('Don’t have an account, yet?')}
                </Typography>{' '}
                <Link
                  href={
                    demo
                      ? `/auth/register/cover?demo=${demo}`
                      : '/auth/register/cover'
                  }
                >
                  <b>Sign up here</b>
                </Link>
              </Box>
              {method !== 'Auth0' && (
                <Tooltip
                  title={t('Used only for the live preview demonstration !')}
                >
                  <Alert severity="warning">
                    Use <b>demo@example.com</b> and password <b>TokyoPass1@</b>
                  </Alert>
                </Tooltip>
              )}
            </Card>
          </Container>
        </MainContent>
      </Content>
    </>
  );
}

LoginCover.getLayout = (page) => (
  <Guest>
    <BaseLayout>{page}</BaseLayout>
  </Guest>
);

export default LoginCover;
