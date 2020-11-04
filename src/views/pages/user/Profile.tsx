import Button from '@material-ui/core/Button';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import * as React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../store/ducks';
import { IUserUpdate } from '../../../store/models';
import { ThunkVoidAction, ThunkVoidDispatch } from '../../../store/types';
import { handleInputChange, useCustomState } from '../../../utils/customHooks';
import { actions, types } from '../../../store/ducks/api/auth';
import { useConfirmDialog } from '../../../utils/ConfirmDialogProvider';
import { showToast } from '../../../utils/showToast';
import Grid from '@material-ui/core/Grid';
import { IUserChangePassword } from '../../../store/models/IUser';
import { createErrorSelector } from '../../../store/ducks/error';

const useStyles = makeStyles((theme) =>
  createStyles({
    heading: {
      fontWeight: 600,
    },
    divider: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
    marginTop: {
      marginTop: theme.spacing(1),
    },
  })
);

const Profile: React.FC<PropsFromRedux> = ({
  auth,
  dispatchUpdateProfile,
  dispatchChangePassword,
  dispatchClearErrors,
  dispatchResetFlags,
  error,
}) => {
  const confirmDialog = useConfirmDialog();
  const [state, setState] = useCustomState({
    firstName: '',
    lastName: '',
    email: '',
    currentPassword: '',
    password: '',
    confirmPassword: '',
  });

  React.useEffect(() => {
    if (auth.user) {
      setState({
        firstName: auth.user.firstName,
        lastName: auth.user.lastName,
        email: auth.user.email,
      });
    }
  }, [auth.user, setState]);

  React.useEffect(() => {
    if (!!auth.user && auth.updatedProfile) {
      showToast(
        'Success!',
        'Your profile has been updated.',
        'success',
        dispatchResetFlags
      );
    }
  }, [auth.updatedProfile, auth.user, dispatchResetFlags]);

  React.useEffect(() => {
    if (!!auth.user && auth.changedPassword) {
      showToast(
        'Success!',
        'Your password has been changed.',
        'success',
        dispatchResetFlags
      );
      setState({
        currentPassword: '',
        password: '',
        confirmPassword: '',
      });
    }
  }, [auth.changedPassword, auth.user, dispatchResetFlags, setState]);

  React.useEffect(() => {
    if (error) {
      showToast('Error!', error, 'danger', dispatchClearErrors);
    }
  }, [dispatchClearErrors, error]);

  const classes = useStyles();

  const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const shouldUpdate = await confirmDialog({
      variant: 'danger',
      title: 'Are you sure?',
      description: 'Do you wish to update your profile?',
    });
    if (!!auth.user && shouldUpdate) {
      if (
        state.firstName === auth.user.firstName &&
        state.lastName === auth.user.lastName
      ) {
        return;
      }
      dispatchUpdateProfile({
        firstName: state.firstName,
        lastName: state.lastName,
      });
    }
  };

  const handleChangePassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const shouldUpdate = await confirmDialog({
      variant: 'danger',
      title: 'Are you sure?',
      description: 'Do you wish to change your password?',
    });
    if (!!auth.user && shouldUpdate) {
      if (state.password.trim() === '') {
        showToast('', 'Please enter a valid password.', 'warning');
        return;
      } else if (state.password !== state.confirmPassword) {
        showToast('', 'Passwords do not match. Please try again.', 'warning');
        return;
      }
      dispatchChangePassword({
        currentPassword: state.currentPassword,
        password: state.password,
      });
    }
  };

  return (
    <React.Fragment>
      <form onSubmit={handleUpdateProfile} autoComplete="off">
        <h2 className={classes.heading}>Profile Information:</h2>
        <TextField
          label="Email Address"
          fullWidth
          margin="normal"
          value={state.email}
          disabled
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name="firstName"
          label="First Name"
          fullWidth
          margin="normal"
          value={state.firstName}
          onChange={(e) => {
            handleInputChange(e, setState);
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name="lastName"
          label="Last Name"
          fullWidth
          margin="normal"
          value={state.lastName}
          onChange={(e) => {
            handleInputChange(e, setState);
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Grid container className={classes.marginTop} justify="flex-end">
          <Button variant="contained" type="submit" size="large">
            Save Changes
          </Button>
        </Grid>
      </form>
      <form onSubmit={handleChangePassword} autoComplete="off">
        <Divider className={classes.divider} />
        <h2 className={classes.heading}>Change Password:</h2>
        <TextField
          name="currentPassword"
          label="Current Password"
          fullWidth
          type="password"
          margin="normal"
          value={state.currentPassword}
          onChange={(e) => {
            handleInputChange(e, setState);
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name="password"
          label="New Password"
          fullWidth
          type="password"
          margin="normal"
          value={state.password}
          onChange={(e) => {
            handleInputChange(e, setState);
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          name="confirmPassword"
          label="Confirm New Password"
          fullWidth
          type="password"
          margin="normal"
          value={state.confirmPassword}
          onChange={(e) => {
            handleInputChange(e, setState);
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Grid container className={classes.marginTop} justify="flex-end">
          <Button variant="contained" type="submit" size="large">
            Change Password
          </Button>
        </Grid>
      </form>
    </React.Fragment>
  );
};

const errorSelector = createErrorSelector([types.CHANGE_PASSWORD]);

const mapStateToProps = (state: RootState) => ({
  auth: state.auth,
  error: errorSelector(state),
});

const mapDispatchToProps = (dispatch: ThunkVoidDispatch) => ({
  dispatchUpdateProfile: (data: IUserUpdate): ThunkVoidAction =>
    dispatch(actions.updateProfile(data)),
  dispatchChangePassword: (data: IUserChangePassword): ThunkVoidAction =>
    dispatch(actions.changePassword(data)),
  dispatchClearErrors: (): ThunkVoidAction => dispatch(actions.clearErrors()),
  dispatchResetFlags: (): ThunkVoidAction => dispatch(actions.resetFlags()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Profile);
