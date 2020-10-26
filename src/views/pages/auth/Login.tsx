import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import VpnKey from '@material-ui/icons/VpnKey';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import config from '../../../config';
import { connect, ConnectedProps } from 'react-redux';
import { actions, types } from '../../../store/ducks/api/auth';
import { useCustomState, handleInputChange } from '../../../utils/customHooks';
import { ThunkVoidAction, ThunkVoidDispatch } from '../../../store/types';
import { createLoadingSelector } from '../../../store/ducks/loading';
import { RootState } from '../../../store/ducks';
import { Link as RouterLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link component={RouterLink} color="inherit" to={config.HOME_URL}>
      JobTrackify
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    backgroundImage: `url(${require('../../../assets/images/bg2.jpg')})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  card: {
    marginTop: theme.spacing(12),
    padding: theme.spacing(4),
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login: React.FC<PropsFromRedux> = ({ dispatchLogin, isLoading }) => {
  const [state, setState] = useCustomState({ email: '', password: '' });
  const classes = useStyles();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = state;
    dispatchLogin(data);
    setState({ password: '' });
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Avatar className={classes.avatar}>
              <VpnKey />
            </Avatar>
            <Typography component="h1" variant="h5">
              Account Login
            </Typography>
            <form className={classes.form} onSubmit={handleFormSubmit}>
              <TextField
                InputLabelProps={{ required: false }}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoFocus
                value={state.email}
                onChange={(e) => {
                  handleInputChange(e, setState);
                }}
              />
              <TextField
                InputLabelProps={{ required: false }}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={state.password}
                onChange={(e) => {
                  handleInputChange(e, setState);
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={isLoading}
              >
                {isLoading ? <CircularProgress size={25} /> : 'Login'}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    component={RouterLink}
                    to="/auth/forgotpassword"
                    variant="body2"
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    component={RouterLink}
                    to="/auth/register"
                    variant="body2"
                  >
                    {"Don't have an account? Register"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
};

const loadingSelector = createLoadingSelector([types.LOGIN]);

const mapStateToProps = (state: RootState) => ({
  isLoading: loadingSelector(state),
});

const mapDispatchToProps = (dispatch: ThunkVoidDispatch) => ({
  dispatchLogin: (data: any): ThunkVoidAction => dispatch(actions.login(data)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Login);
