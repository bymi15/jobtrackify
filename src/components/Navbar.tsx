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
import LetterAvatar from './LetterAvatar';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  nav: {
    flexGrow: 1,
    background: 'none',
    color: '#fff',
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
  iconButton: {
    marginRight: theme.spacing(2),
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  navTitle: {
    flexGrow: 1,
  },
}));

const Navbar: React.FC<PropsFromRedux> = ({ auth, dispatchLogout }) => {
  const classes = useStyles();
  const theme = useTheme();
  const useSmallView = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    dispatchLogout();
  };

  const guestMenu = (
    <div className={classes.whiteText}>
      <Button component={RouterLink} to="/auth/login">
        Login
      </Button>
      <Button component={RouterLink} to="/auth/register">
        Register
      </Button>
    </div>
  );

  const userMenu = (
    <div className={classes.whiteText}>
      <IconButton
        aria-label="user account"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
      >
        <LetterAvatar
          firstName={auth.user && auth.user.firstName}
          lastName={auth.user && auth.user.lastName}
        />
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
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );

  return (
    <AppBar className={classes.nav} elevation={0}>
      <Toolbar className={classes.navWrapper}>
        {useSmallView && (
          <IconButton
            className={classes.iconButton}
            edge="start"
            aria-label="menu"
          >
            <MenuIcon className={classes.icon} />
          </IconButton>
        )}
        <div className={classes.navTitle}>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            color="inherit"
            style={{ textDecoration: 'none' }}
          >
            JobTrackify
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
