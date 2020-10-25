import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const bg = 'bg1.jpg';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${require('../../../assets/images/' + bg)})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
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
    marginBottom: theme.spacing(2),
  },
  containedButton: {
    marginRight: theme.spacing(2),
  },
  outlineButton: {
    color: '#fff',
    borderColor: '#fff',
  },
}));

const Landing: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.mainTextWrapper}>
        <h1 className={classes.mainText}>
          Welcome to <span>JobTrackify</span>
        </h1>
        <div>
          <Button
            variant="contained"
            className={classes.containedButton}
            component={RouterLink}
            to="/dashboard"
            size="large"
            color="secondary"
          >
            View Dashboard
          </Button>
          <Button
            variant="outlined"
            className={classes.outlineButton}
            component={RouterLink}
            to="/about"
            size="large"
          >
            Find out more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
