import { AppBar, Button, IconButton, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import * as React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../store/ducks';
import { ThunkVoidAction, ThunkVoidDispatch } from '../store/types';
import { actions } from '../store/ducks/api/auth';
import { Link as RouterLink } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Logo from '../assets/images/logo.png';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import config from '../config';
import { persistor } from '../store';

const useStyles = makeStyles((theme) => ({
  nav: {
    position: 'fixed',
    flexGrow: 1,
    background: 'none',
    color: '#fff',
  },
  navSolid: {
    background: '#20232a',
    zIndex: theme.zIndex.drawer + 1,
  },
  whiteText: {
    '& * ': {
      color: '#fff',
    },
  },
  navWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  smallNavWrapper: {
    width: '97%',
    margin: '0 auto',
  },
  iconButton: {
    marginRight: theme.spacing(2),
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  navTitle: {
    marginLeft: theme.spacing(1),
    flexGrow: 1,
  },
}));

interface Props extends PropsFromRedux {
  solid?: boolean;
}

const Navbar: React.FC<Props> = ({ solid, auth, dispatchLogout }) => {
  const classes = useStyles();
  const theme = useTheme();
  const useSmallView = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [
    anchorElMobile,
    setAnchorElMobile,
  ] = React.useState<null | HTMLElement>(null);

  const handleMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuMobile = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorElMobile(e.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const handleCloseMobile = () => setAnchorElMobile(null);

  const handleLogout = async () => {
    setAnchorEl(null);
    dispatchLogout();
    await persistor.purge();
  };

  const guestMenu = (
    <Hidden smDown>
      <div className={classes.whiteText}>
        <Button component={RouterLink} to="/auth/login">
          Login
        </Button>
        <Button component={RouterLink} to="/auth/register">
          Register
        </Button>
      </div>
    </Hidden>
  );

  const userMenu = (
    <div className={classes.whiteText}>
      <IconButton
        aria-label="user account"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem component={RouterLink} to="/user/profile">
          Profile
        </MenuItem>
        <MenuItem component={RouterLink} to="/user/settings">
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );

  return (
    <AppBar className={solid ? classes.navSolid : classes.nav} elevation={0}>
      <Toolbar
        className={useSmallView ? classes.smallNavWrapper : classes.navWrapper}
      >
        {useSmallView && (
          <React.Fragment>
            <IconButton
              className={classes.iconButton}
              edge="start"
              aria-label="menu-mobile"
              aria-controls="menu-mobile"
              aria-haspopup="true"
              onClick={handleMenuMobile}
            >
              <MenuIcon className={classes.icon} />
            </IconButton>
            <Menu
              id="menu-mobile"
              anchorEl={anchorElMobile}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElMobile)}
              onClose={handleCloseMobile}
            >
              <MenuItem component={RouterLink} to="/">
                Home
              </MenuItem>
              <Divider />
              <MenuItem component={RouterLink} to="/about">
                About
              </MenuItem>
              <Divider />
              <MenuItem component={RouterLink} to="/dashboard">
                Dashboard
              </MenuItem>
              <Divider />
              <MenuItem component={RouterLink} to="/auth/login">
                Login
              </MenuItem>
              <Divider />
              <MenuItem component={RouterLink} to="/auth/register">
                Register
              </MenuItem>
            </Menu>
          </React.Fragment>
        )}
        <Avatar alt="logo" src={Logo} component={RouterLink} to="/" />
        <div className={classes.navTitle}>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            color="inherit"
            style={{ textDecoration: 'none' }}
          >
            {config.APP_NAME}
          </Typography>
        </div>
        {auth.isAuthenticated ? userMenu : guestMenu}
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state: RootState) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch: ThunkVoidDispatch) => ({
  dispatchLogout: (): ThunkVoidAction => dispatch(actions.logout()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Navbar);
