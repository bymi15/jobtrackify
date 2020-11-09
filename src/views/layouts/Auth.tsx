import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store/ducks';
import { createErrorSelector } from '../../store/ducks/error';
import { showToast } from '../../utils/showToast';
import { ThunkVoidAction, ThunkVoidDispatch } from '../../store/types';
import { actions, types } from '../../store/ducks/api/auth';

interface Props extends PropsFromRedux {
  children: React.ReactNode;
}

const Auth: React.FC<Props> = ({
  auth,
  error,
  dispatchClearErrors,
  children,
}) => {
  React.useEffect(() => {
    if (error) {
      showToast('Error', error, 'danger', dispatchClearErrors);
    }
  }, [dispatchClearErrors, error]);

  if (auth.isAuthenticated) {
    return <Redirect to="/dashboard" />;
  } else {
    return <React.Fragment>{children}</React.Fragment>;
  }
};

const errorSelector = createErrorSelector([types.LOGIN, types.REGISTER]);

const mapStateToProps = (state: RootState) => ({
  auth: state.auth,
  error: errorSelector(state),
});

const mapDispatchToProps = (dispatch: ThunkVoidDispatch) => ({
  dispatchClearErrors: (): ThunkVoidAction => dispatch(actions.clearErrors()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Auth);
