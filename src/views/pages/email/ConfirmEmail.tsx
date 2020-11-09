import * as React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../../store/ducks';
import { actions } from '../../../store/ducks/api/auth';
import { ThunkVoidAction, ThunkVoidDispatch } from '../../../store/types';
import { showToast } from '../../../utils/showToast';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 'calc(100vh - 64px)',
      padding: theme.spacing(5),
      paddingTop: '170px',
      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(1),
        paddingTop: '120px',
      },
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '360px',
      [theme.breakpoints.down('xs')]: {
        height: '480px',
      },
    },
    content: {
      textAlign: 'center',
    },
    title: {
      fontSize: '24px',
      fontWeight: 500,
    },
    marginBottom: {
      marginBottom: theme.spacing(2),
    },
  })
);

const ConfirmEmail: React.FC<PropsFromRedux> = ({
  auth,
  dispatchResendConfirmEmail,
}) => {
  const [buttonActive, setButtonActive] = React.useState(true);
  const classes = useStyles();
  const history = useHistory();

  React.useEffect(() => {
    if (!auth.isAuthenticated) {
      showToast('', 'Please login to proceed', 'warning');
      history.push('/auth/login');
    } else if (!!auth.user && auth.user.emailConfirmed) {
      showToast('', 'This email has already been confirmed.', 'info');
      history.push('/');
    }
  }, [auth.isAuthenticated, auth.user, history]);

  const handleClick = () => {
    dispatchResendConfirmEmail();
    setButtonActive(false);
    showToast('Success!', 'A confirmation email has been sent.', 'success');
  };

  return (
    auth &&
    auth.user && (
      <Container maxWidth="sm" className={classes.root}>
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <Typography
              className={classes.title}
              color="textPrimary"
              variant="h3"
              gutterBottom
            >
              Please verify your email
            </Typography>
            <Typography
              color="textSecondary"
              variant="body1"
              className={classes.marginBottom}
            >
              A confirmation email has been sent to:
              <br />
              <strong>{auth.user.email}</strong>
            </Typography>
            <Typography
              color="textSecondary"
              variant="body1"
              className={classes.marginBottom}
            >
              Simply click on the link in the email to complete your
              registration.
              <br />
              If you cant find the email, please check your spam folder.
            </Typography>
            <Typography color="textSecondary" variant="body1" gutterBottom>
              Still can't find the email?
            </Typography>
            <Button
              variant="contained"
              onClick={handleClick}
              className={classes.marginBottom}
              disabled={!buttonActive}
            >
              Resend Email
            </Button>
            <Typography color="textSecondary" variant="body1">
              Feel free to{' '}
              <Link href="mailto:contact@jobtrackify.com" variant="body2">
                contact us
              </Link>{' '}
              if you need assistance
            </Typography>
          </CardContent>
        </Card>
      </Container>
    )
  );
};

const mapStateToProps = (state: RootState) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch: ThunkVoidDispatch) => ({
  dispatchResendConfirmEmail: (): ThunkVoidAction =>
    dispatch(actions.resendConfirmEmail()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ConfirmEmail);
