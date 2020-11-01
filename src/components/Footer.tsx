import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import Logo from '../assets/images/logo.png';
import { Link as RouterLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import config from '../config';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
    backgroundColor: '#f9f8ff',
  },
  marginBottom: {
    marginBottom: theme.spacing(2),
  },
  brand: {
    fontWeight: 500,
    marginLeft: theme.spacing(1),
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    textDecoration: 'none !important',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

interface Props {}

const Footer: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" className={classes.marginBottom}>
        <Grid item>
          <Typography variant="body1">
            <Link component={RouterLink} to="/about" className={classes.link}>
              About
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">•</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <Link
              href="mailto:contact@jobtrackify.com"
              className={classes.link}
            >
              Email Us
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">•</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <Link
              component={RouterLink}
              to="/auth/login"
              className={classes.link}
            >
              Login
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">•</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <Link
              component={RouterLink}
              to="/auth/register"
              className={classes.link}
            >
              Register
            </Link>
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center" className={classes.marginBottom}>
        <Grid item>
          <Typography variant="body1">
            <Link component={RouterLink} to="/terms" className={classes.link}>
              Terms of Service
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">•</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <Link component={RouterLink} to="/privacy" className={classes.link}>
              Privacy Policy
            </Link>
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.marginBottom}
      >
        <Grid item className={classes.wrapper}>
          <Avatar alt="logo" src={Logo} component={RouterLink} to="/" />
          <Typography variant="body1" className={classes.brand}>
            Job Trackify
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item>
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link component={RouterLink} color="inherit" to="/">
              {config.APP_NAME}
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
