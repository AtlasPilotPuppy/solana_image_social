import { Fragment } from 'react';
import type { FC } from 'react';

import PropTypes from 'prop-types';
import {
  Box,
  List,
  Button,
  alpha,
  styled,
  useTheme,
  Drawer,
  ListSubheader
} from '@mui/material';
import { MailboxSidebarItem } from './SidebarItem';
import { useTranslation } from 'react-i18next';
import Scrollbar from 'src/components/Scrollbar';
import type { Tag } from 'src/models/mailbox';

interface MailboxSidebarProps {
  tag?: string;
  tags: Tag[];
  open?: boolean;
  onClose?: () => void;
}

const DrawerWrapper = styled(Drawer)(
  ({ theme }) => `
    width: 280px;
    flex-shrink: 0;
    z-index: 3;
    position: relative;

    & > .MuiPaper-root {
        width: 280px;
        height: calc(100% - ${theme.header.height});
        position: fixed;
        top: ${theme.header.height};
        left: ${theme.sidebar.width};
        z-index: 3;
        background: ${alpha(theme.colors.alpha.white[100], 0.1)};
    }
`
);

const DrawerWrapperMobile = styled(Drawer)(
  () => `
    width: 280px;
    flex-shrink: 0;

  & > .MuiPaper-root {
        width: 280px;
        z-index: 3;
  }
`
);

const ListItemWrapper = styled(MailboxSidebarItem)(
  ({ theme }) => `

    padding: ${theme.spacing(1)};

    .MuiTypography-root {
      font-size: ${theme.typography.pxToRem(13)};
      color: ${theme.colors.alpha.black[100]};
    }

    .MuiListItemIcon-root {
      color: ${theme.colors.primary.main};
      min-width: 34px;
    }

    .MuiTouchRipple-root {
      display: none;
    }

    &.Mui-selected {
      background-color: ${theme.colors.alpha.white[100]} !important;
    }

    &:hover {
      background-color: ${theme.colors.alpha.white[70]};
    }
`
);

const groupTags = (tags) => {
  const groups = {
    category_tag: [],
    label_tag: []
  };

  tags.forEach((tag) => {
    if (tag.type === 'category_tag') {
      groups.category_tag.push(tag);
    } else {
      groups.label_tag.push(tag);
    }
  });

  return groups;
};

export const MailboxSidebar: FC<MailboxSidebarProps> = (props) => {
  const { tag: currentTag, tags, open, onClose } = props;
  const { t }: { t: any } = useTranslation();

  const groupedTags = groupTags(tags);

  const theme = useTheme();

  const handleTagClick = () => {
    onClose?.();
  };

  const sidebarContent = (
    <Box p={3}>
      <Button sx={{ mb: 3 }} fullWidth variant="contained">
        {t('Compose message')}
      </Button>

      {Object.keys(groupedTags).map((type) => (
        <Fragment key={type}>
          {type === 'label_tag' && (
            <ListSubheader
              disableGutters
              sx={{
                fontWeight: 'bold',
                textTransform: 'uppercase'
              }}
              disableSticky={true}
            >
              {t('Labels')}
            </ListSubheader>
          )}
          <List disablePadding component="div">
            {groupedTags[type].map((tag) => (
              <ListItemWrapper
                active={
                  currentTag === tag.id || (!currentTag && tag.id === 'inbox')
                }
                key={tag.id}
                tag={tag}
                onClick={handleTagClick}
              />
            ))}
          </List>
        </Fragment>
      ))}
    </Box>
  );

  return (
    <>
      <DrawerWrapperMobile
        sx={{
          display: { lg: 'none', xs: 'inline-block' }
        }}
        variant="temporary"
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        onClose={onClose}
        open={open}
      >
        <Scrollbar>{sidebarContent}</Scrollbar>
      </DrawerWrapperMobile>
      <DrawerWrapper
        sx={{
          display: { xs: 'none', lg: 'block' }
        }}
        variant="permanent"
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open
      >
        <Scrollbar>{sidebarContent}</Scrollbar>
      </DrawerWrapper>
    </>
  );
};

MailboxSidebar.propTypes = {
  open: PropTypes.bool,
  tag: PropTypes.string,
  tags: PropTypes.array.isRequired,
  onClose: PropTypes.func
};
