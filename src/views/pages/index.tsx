import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import classNames from 'classnames';
import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import config from '../../config';

const bg = 'bg1.jpg';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${require('../../assets/images/' + bg)})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  flex: {
    display: 'flex',
  },
  mainTextWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  mainText: {
    color: '#fff',
    fontSize: '3.5rem',
    '& span': {
      color: '#f50057',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.7rem',
    },
    textAlign: 'center',
    marginBottom: theme.spacing(1),
  },
  subText: {
    color: '#fff',
    fontSize: '1.2rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
    },
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  containedButton: {
    marginRight: theme.spacing(2),
  },
  outlineButton: {
    color: '#fff',
    borderColor: '#fff',
  },
  extraPadding: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
}));

const Landing: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const useSmallView = useMediaQuery(theme.breakpoints.down('xs'));
  const responsiveClassname = classNames({
    [classes.flex]: true,
    [classes.extraPadding]: Boolean(useSmallView),
  });

  return (
    <div className={classes.root}>
      <div className={classes.mainTextWrapper}>
        <Grid container className={classes.flex} justify="center">
          <h1 className={classes.mainText}>
            {useSmallView ? (
              <React.Fragment>
                Welcome to
                <br />
                <span>{config.APP_NAME}</span>
              </React.Fragment>
            ) : (
              <React.Fragment>
                Welcome to <span>{config.APP_NAME}</span>
              </React.Fragment>
            )}
          </h1>
        </Grid>
        <Grid container className={responsiveClassname} justify="center">
          <div className={classes.subText}>
            Manage your job applications in an all-in-one platform
          </div>
        </Grid>
        <Grid container className={responsiveClassname} justify="center">
          <Button
            variant="contained"
            className={classes.containedButton}
            component={RouterLink}
            to="/dashboard"
            size={useSmallView ? 'small' : 'large'}
            color="secondary"
          >
            View Dashboard
          </Button>
          <Button
            variant="outlined"
            className={classes.outlineButton}
            component={RouterLink}
            to="/about"
            size={useSmallView ? 'small' : 'large'}
          >
            Find out more
          </Button>
        </Grid>
      </div>
    </div>
  );
};

export default Landing;
