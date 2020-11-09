import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Security from '@material-ui/icons/Security';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import config from '../../../config';
import { connect, ConnectedProps } from 'react-redux';
import { ThunkVoidAction, ThunkVoidDispatch } from '../../../store/types';
import { handleInputChange, useCustomState } from '../../../utils/customHooks';
import { actions, types } from '../../../store/ducks/api/auth';
import { Link as RouterLink } from 'react-router-dom';
import { createLoadingSelector } from '../../../store/ducks/loading';
import { RootState } from '../../../store/ducks';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import { showToast } from '../../../utils/showToast';
import { createErrorSelector } from '../../../store/ducks/error';

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
    backgroundImage: `url(${require('../../../assets/images/bg4.jpg')})`,
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Register: React.FC<PropsFromRedux> = ({
  dispatchRegister,
  loading,
  error,
}) => {
  const [state, setState] = useCustomState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });
  const classes = useStyles();

  React.useEffect(() => {
    if (error) {
      setState({ password: '', confirmPassword: '' });
    }
  }, [error, setState]);

  const handleCheckTerms = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ agreeTerms: e.target.checked });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = state;
    if (data.password !== data.confirmPassword) {
      showToast('Please try again.', 'The passwords do not match.', 'danger');
      setState({ password: '', confirmPassword: '' });
    } else if (!state.agreeTerms) {
      showToast(
        '',
        'You must agree to our terms of service and privacy policy in order to proceed',
        'danger'
      );
    } else {
      Reflect.deleteProperty(data, 'agreeTerms');
      Reflect.deleteProperty(data, 'confirmPassword');
      dispatchRegister(data);
    }
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Avatar className={classes.avatar}>
              <Security />
            </Avatar>
            <Typography component="h1" variant="h5">
              Create an account
            </Typography>
            <form className={classes.form} onSubmit={handleFormSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    value={state.firstName}
                    onChange={(e) => {
                      handleInputChange(e, setState);
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    value={state.lastName}
                    onChange={(e) => {
                      handleInputChange(e, setState);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={state.email}
                    onChange={(e) => {
                      handleInputChange(e, setState);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
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
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    value={state.confirmPassword}
                    onChange={(e) => {
                      handleInputChange(e, setState);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        required
                        checked={state.agreeTerms}
                        onChange={handleCheckTerms}
                        name="agreeTerms"
                        color="primary"
                      />
                    }
                    label={
                      <label>
                        I agree to the{' '}
                        <Link
                          component={RouterLink}
                          to="/terms"
                          variant="body2"
                        >
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link
                          component={RouterLink}
                          to="/privacy"
                          variant="body2"
                        >
                          Privacy Policy
                        </Link>
                      </label>
                    }
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={loading}
              >
                {loading ? <CircularProgress size={25} /> : 'Register'}
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  Already have an account?
                  <Link component={RouterLink} to="/auth/login" variant="body2">
                    {' '}
                    Login
                  </Link>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
};

const errorSelector = createErrorSelector([types.REGISTER]);
const loadingSelector = createLoadingSelector([types.REGISTER]);

const mapStateToProps = (state: RootState) => ({
  loading: loadingSelector(state),
  error: errorSelector(state),
});

const mapDispatchToProps = (dispatch: ThunkVoidDispatch) => ({
  dispatchRegister: (data: any): ThunkVoidAction =>
    dispatch(actions.register(data)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Register);
