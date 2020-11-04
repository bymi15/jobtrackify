import * as React from 'react';
import { withRouter, RouteComponentProps, useHistory } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import Navbar from '../../components/Navbar';
import LetterAvatar from '../../components/LetterAvatar';
import { RootState } from '../../store/ducks';
import { createStyles, CssBaseline, makeStyles } from '@material-ui/core';
import { showToast } from '../../utils/showToast';
import Sidebar from '../../components/Sidebar';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link as RouterLink } from 'react-router-dom';
import { IUser } from '../../store/models';

const useStylesSidebar = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 0,
      marginBottom: 0,
    },
  })
);

interface SidebarProps {
  user: IUser | null;
  pathname: string;
}

const SidebarContent: React.FC<SidebarProps> = ({ user, pathname }) => {
  const classes = useStylesSidebar();

  return (
    <React.Fragment>
      {user && (
        <div className={classes.root}>
          <LetterAvatar
            name={`${user.firstName} ${user.lastName}`}
            size="xl"
            color="#f50057"
          />
          <h3>{`${user.firstName} ${user.lastName}`}</h3>
        </div>
      )}
      <List>
        <ListItem
          button
          component={RouterLink}
          to="/user/profile"
          selected={pathname === '/user/profile'}
        >
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem
          button
          component={RouterLink}
          to="/user/settings"
          selected={pathname === '/user/settings'}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem
          button
          component={RouterLink}
          to="/user/email-preferences"
          selected={pathname === '/user/email-preferences'}
        >
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary="Email Preferences" />
        </ListItem>
      </List>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(4),
      [theme.breakpoints.up('md')]: {
        paddingLeft: '128px',
        paddingRight: '128px',
      },
      [theme.breakpoints.up('lg')]: {
        paddingLeft: '192px',
        paddingRight: '192px',
      },
    },
    cardContent: {
      margin: theme.spacing(4),
      [theme.breakpoints.down('md')]: {
        margin: theme.spacing(2),
      },
    },
  })
);

interface Props extends PropsFromRedux {
  children: React.ReactNode;
}

const User: React.FC<Props & RouteComponentProps> = ({
  children,
  auth,
  location,
}) => {
  const classes = useStyles();
  const history = useHistory();

  React.useEffect(() => {
    if (!auth.isAuthenticated && !auth.token) {
      showToast('', 'Please login to proceed', 'warning');
      history.push('/auth/login');
    }
  }, [auth.isAuthenticated, auth.token, history]);

  return !!auth.isAuthenticated && !!auth.token ? (
    <div style={{ overflow: 'hidden' }}>
      <CssBaseline />
      <Navbar solid />

      <div className={classes.root}>
        <Sidebar>
          <SidebarContent pathname={location.pathname} user={auth.user} />
        </Sidebar>
        <main className={classes.content}>
          <Card>
            <CardContent className={classes.cardContent}>
              {children}
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  ) : null;
};

const mapStateToProps = (state: RootState) => ({
  auth: state.auth,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default withRouter(connector(User));
