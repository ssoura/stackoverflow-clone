import { useLocation, Link as RouterLink } from 'react-router-dom';

import { MenuItem, useMediaQuery, Divider, Grid } from '@mui/material';
import { useMenuStyles } from '../styles/muiStyles';
import { useTheme } from '@mui/material/styles';
import PublicIcon from '@mui/icons-material/Public';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleIcon from '@mui/icons-material/People';

const DesktopNavMenu = () => {
  const { pathname } = useLocation();
  const classes = useMenuStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (isMobile) return null;

  return (
    <Grid item>
      <div className={classes.rootPanel}>
        <div className={classes.list}>
          <MenuItem
            selected={
              pathname === '/' ||
              (!pathname.startsWith('/tag') && !pathname.startsWith('/user'))
            }
            component={RouterLink}
            to="/"
          >
            <PublicIcon className={classes.menuIcon} />
            StackOverflow
          </MenuItem>
          <MenuItem
            selected={pathname.startsWith('/tag')}
            component={RouterLink}
            to="/tags"
          >
            <LocalOfferIcon className={classes.menuIcon} />
            Tags
          </MenuItem>
          <MenuItem
            selected={pathname.startsWith('/user')}
            component={RouterLink}
            to="/users"
          >
            <PeopleIcon className={classes.menuIcon} />
            Users
          </MenuItem>
        </div>
        <Divider orientation="vertical" flexItem />
      </div>
    </Grid>
  );
};

export default DesktopNavMenu;
