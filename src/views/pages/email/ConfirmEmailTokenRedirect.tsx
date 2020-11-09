import * as React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Link, Redirect, useHistory, useParams } from 'react-router-dom';
import Loader from '../../../components/Loader';
import { RootState } from '../../../store/ducks';
import { actions, types } from '../../../store/ducks/api/auth';
import { createErrorSelector } from '../../../store/ducks/error';
import { createLoadingSelector } from '../../../store/ducks/loading';
import { ThunkVoidAction, ThunkVoidDispatch } from '../../../store/types';
import { showToast } from '../../../utils/showToast';

interface ParamTypes {
  token: string;
}

const ConfirmEmailTokenRedirect: React.FC<PropsFromRedux> = ({
  auth,
  loading,
  error,
  dispatchGetAuthUser,
  dispatchClearErrors,
  dispatchResetFlags,
  dispatchConfirmEmail,
}) => {
  const { token } = useParams<ParamTypes>();
  const history = useHistory();

  React.useEffect(() => {
    dispatchConfirmEmail(token);
  }, [dispatchConfirmEmail, token]);

  React.useEffect(() => {
    if (error) {
      showToast(
        'Failed to confirm email',
        error,
        'danger',
        dispatchClearErrors
      );
      history.push('/');
    } else if (auth.confirmedEmail) {
      showToast('Success!', 'Your email has been confirmed.', 'success', () => {
        dispatchResetFlags();
        dispatchGetAuthUser();
      });
      history.push('/auth/login');
    }
  }, [
    auth.confirmedEmail,
    dispatchClearErrors,
    dispatchGetAuthUser,
    dispatchResetFlags,
    error,
    history,
  ]);

  if (loading) {
    return <Loader />;
  } else if (auth.user && auth.user.emailConfirmed) {
    showToast('', 'This email has already been confirmed.', 'warning');
    return <Redirect to="/" />;
  } else {
    return (
      <p>
        You will be automatically redirected...{' '}
        <Link to="/">Click here to redirect</Link>
      </p>
    );
  }
};

const loadingSelector = createLoadingSelector([types.CONFIRM_EMAIL]);
const errorSelector = createErrorSelector([types.CONFIRM_EMAIL]);

const mapStateToProps = (state: RootState) => ({
  auth: state.auth,
  loading: loadingSelector(state),
  error: errorSelector(state),
});

const mapDispatchToProps = (dispatch: ThunkVoidDispatch) => ({
  dispatchConfirmEmail: (token: string): ThunkVoidAction =>
    dispatch(actions.confirmEmail(token)),
  dispatchClearErrors: (): ThunkVoidAction => dispatch(actions.clearErrors()),
  dispatchGetAuthUser: (): ThunkVoidAction => dispatch(actions.getAuthUser()),
  dispatchResetFlags: (): ThunkVoidAction => dispatch(actions.resetFlags()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(ConfirmEmailTokenRedirect);
