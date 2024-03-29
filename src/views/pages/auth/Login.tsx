import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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
import { showToast } from '../../../utils/showToast';

const Copyright = () => (
  <Typography variant="body2" color="textPrimary" align="center">
    {'Copyright © '}
    <Link component={RouterLink} color="inherit" to="/">
      {config.APP_NAME}
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

const Login: React.FC<PropsFromRedux> = ({
  dispatchLogin,
  loading,
  dispatchResetFlags,
  auth,
}) => {
  const [state, setState] = useCustomState({ email: '', password: '' });
  const classes = useStyles();

  React.useEffect(() => {
    if (auth.deletedAccount) {
      showToast(
        '',
        'Your account has been permanently deleted.',
        'info',
        dispatchResetFlags
      );
    }
  }, [auth.deletedAccount, dispatchResetFlags]);

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
              Login to your account
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={loading}
              >
                {loading ? <CircularProgress size={25} /> : 'Login'}
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
                  Don't have an account?
                  <Link
                    component={RouterLink}
                    to="/auth/register"
                    variant="body2"
                  >
                    {' '}
                    Register
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
  auth: state.auth,
  loading: loadingSelector(state),
});

const mapDispatchToProps = (dispatch: ThunkVoidDispatch) => ({
  dispatchLogin: (data: any): ThunkVoidAction => dispatch(actions.login(data)),
  dispatchResetFlags: (): ThunkVoidAction => dispatch(actions.resetFlags()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Login);
