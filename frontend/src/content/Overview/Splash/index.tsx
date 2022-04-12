import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  styled
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Link from 'src/components/Link';

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);

const ImgWrapper = styled(Box)(
  ({ theme }) => `
    position: relative;
    z-index: 5;
    width: 100%;
    overflow: hidden;
    border-radius: ${theme.general.borderRadiusLg};
    box-shadow: 0 0rem 14rem 0 rgb(255 255 255 / 20%), 0 0.8rem 2.3rem rgb(111 130 156 / 3%), 0 0.2rem 0.7rem rgb(17 29 57 / 15%);

    img {
      display: block;
      width: 100%;
    }
  `
);

const BoxAccent = styled(Box)(
  ({ theme }) => `
    border-radius: ${theme.general.borderRadiusLg};
    background: ${theme.palette.background.default};
    width: 100%;
    height: 100%;
    position: absolute;
    left: -40px;
    bottom: -40px;
    display: block;
    z-index: 4;
  `
);

const BoxContent = styled(Box)(
  () => `
  width: 150%;
  position: relative;
`
);

const LabelWrapper = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.colors.success.main};
    color: ${theme.palette.success.contrastText};
    font-weight: bold;
    border-radius: 30px;
    text-transform: uppercase;
    display: inline-block;
    font-size: ${theme.typography.pxToRem(11)};
    padding: ${theme.spacing(0.5)} ${theme.spacing(1.5)};
    margin-bottom: ${theme.spacing(2)};
`
);

const ListItemWrapper = styled(Box)(
  () => `
    display: flex;
    align-items: center;
`
);

const SolanaAvatar = styled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #e5f7ff;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`
);

const TsAvatar = styled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #dfebf6;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`
);

const IPFSAvatar = styled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: ${
      theme.palette.mode === 'dark'
        ? theme.colors.alpha.trueWhite[50]
        : theme.colors.alpha.black[10]
    };
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`
);

function Splash() {
  const { t }: { t: any } = useTranslation();

  return (
    <Container maxWidth="lg">
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid item md={6} pr={{ xs: 0, md: 3 }}>
          <LabelWrapper color="success">{t('Version') + ' 0.1'}</LabelWrapper>
          <TypographyH1
            sx={{
              mb: 2
            }}
            variant="h1"
          >
            {t('P2P Image Sharing')}
          </TypographyH1>
          <TypographyH2
            sx={{
              lineHeight: 1.5,
              pb: 4
            }}
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
            {t(
              'Censorship resistant, privacy centric image sharing platform. We value your privacy and ability to share what you like.'
            )}
          </TypographyH2>
          <Button
            component={Link}
            href="/dashboards/reports"
            size="large"
            variant="contained"
          >
            {t('Connect Solana Wallet')}
          </Button>
          <ListItemWrapper sx={{ mt: 5, mb: 2 }}>
            <IPFSAvatar>
              <img src="/static/images/logo/ipfs.svg" alt="NextJS" />
            </IPFSAvatar>
            <Typography variant="h6">
              <b>Built with IPFS </b>
              <Typography component="span" variant="subtitle2">
                {' '}
                - IPFS lets users host their files and make them accessible to
                everyone. Decentralized from the cote.
              </Typography>
            </Typography>
          </ListItemWrapper>
          <ListItemWrapper
            sx={{
              mb: 2
            }}
          >
            <SolanaAvatar>
              <img
                src="/static/images/logo/solana.svg"
                alt="MUI (Material-UI)"
              />
            </SolanaAvatar>
            <Typography variant="h6">
              <b>Powered by Solana</b>
              <Typography component="span" variant="subtitle2">
                {' '}
                - Powered by Solana based Programs(Smart Contract).
              </Typography>
            </Typography>
          </ListItemWrapper>
          <ListItemWrapper>
            <TsAvatar>
              <img src="/static/images/logo/typescript.svg" alt="Typescript" />
            </TsAvatar>
            <Typography variant="h6">
              <b>Built with Typescript</b>
              <Typography component="span" variant="subtitle2">
                {' '}
                - Tokyo features a modern technology stack and is built with
                React + Typescript.
              </Typography>
            </Typography>
          </ListItemWrapper>
        </Grid>
        <Grid item md={6}>
          <BoxContent>
            <Link href="/dashboards/reports">
              <ImgWrapper>
                <img
                  alt="Tokyo"
                  src="/static/images/overview/hero-screenshot.png"
                />
              </ImgWrapper>
            </Link>
            <BoxAccent
              sx={{
                display: { xs: 'none', md: 'block' }
              }}
            />
          </BoxContent>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Splash;
