import { Grid, Card, CardMedia, CircularProgress, Divider, CardActions, Box, Typography, Link, IconButton } from "@mui/material";
import { formatDistance, subDays } from "date-fns";
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import TextSnippetTwoToneIcon from '@mui/icons-material/TextSnippetTwoTone';
import { styled, CardActionArea } from '@mui/material';
import { DisplayImage } from "@/models/images";
import { useTranslation } from 'react-i18next';
import fallback from "../../../public/static/images/svg/unavailable.svg"
const CardActionAreaWrapper = styled(CardActionArea)(
    ({ theme }) => `
        height: ${theme.spacing(22)};
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        overflow: hidden;
  
        .MuiSvgIcon-root {
          opacity: .5;
        }
  
        .MuiTouchRipple-root {
          opacity: .3;
        }
  
        img {
          height: auto;
          width: 100%;
        }
  
        .MuiCardActionArea-focusHighlight {
          background: ${theme.colors.warning.main};
        }
  
        &:hover {
          .MuiCardActionArea-focusHighlight {
            opacity: .05;
          }
        }
  `
  );


 
interface ImageProps {
    images: Array<DisplayImage>,
    mobileOpen: boolean
}


export const DisplayImageComponent: React.FC<ImageProps> = (props) =>  {
    const handleDrawerToggle = () => {
        //setMobileOpen(!props.mobileOpen);
      };
      const { t }: { t: any } = useTranslation();      
    return (
        <>
        {props.images.map((image) => <>{

        <Grid item xs={12} sm={6}>
            <div>IMAGE</div>
        <Card>
          <CardActionAreaWrapper onClick={handleDrawerToggle}>
          {true ? (
                <CardMedia
                  component="video" //{getMediaType(link)}
                  onError={e=> {e.target.onerror=null; e.target.src=fallback}}
                  src="https://file-examples.com/wp-content/uploads/2020/03/file_example_WEBM_640_1_4MB.webm" // {link}
                  sx={{height: "100%"}}
                  autoPlay
                  controls
                />
              ) : (
                <div>
                  <CircularProgress color="secondary" />
                </div>
              )}
          </CardActionAreaWrapper>
          <Divider />
          <CardActions
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              p: 2
            }}
          >
            <Box>
              <Box display="flex" alignItems="center" pb={0.5}>
                <TextSnippetTwoToneIcon />
                <Typography
                  sx={{
                    pl: 1
                  }}
                  fontWeight="bold"
                  variant="h6"
                >
                  FileTransfer.txt
                </Typography>
              </Box>
              <Typography component="span" variant="subtitle1">
                {t('Edited')}{' '}
                {formatDistance(subDays(new Date(), 3), new Date(), {
                  addSuffix: true
                })}{' '}
                {t('by')}{' '}
              </Typography>
              <Link href="#">Kate</Link>
            </Box>
            <IconButton size="small" color="primary">
              <MoreHorizTwoToneIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
      }</>)}
      </>
    )
}
