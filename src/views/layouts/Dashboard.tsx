import * as React from 'react';
import { withRouter, RouteComponentProps, useHistory } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import Topbar from '../../components/Topbar';
import Navbar from '../../components/Navbar';
import { types } from '../../store/ducks/api/auth';
import { RootState } from '../../store/ducks';
import { CssBaseline } from '@material-ui/core';
import { showToast } from '../../utils/showToast';
import { createErrorSelector } from '../../store/ducks/error';

interface Props extends PropsFromRedux {
  children: React.ReactNode;
}

const Dashboard: React.FC<Props & RouteComponentProps> = ({
  children,
  auth,
  location,
  error,
}) => {
  const history = useHistory();

  React.useEffect(() => {
    if (
      (!auth.isAuthenticated && !auth.token) ||
      (!auth.isAuthenticated && !!error)
    ) {
      showToast('', 'Please login to proceed', 'warning');
      history.push('/auth/login');
    }
  }, [auth.isAuthenticated, auth.token, error, history]);

  const showTopBar = (): boolean =>
    location.pathname === '/dashboard/board' ||
    location.pathname === '/dashboard/map' ||
    location.pathname === '/dashboard/statistics';

  return !!auth.isAuthenticated && !!auth.token ? (
    <div style={{ overflow: 'hidden' }}>
      <CssBaseline />
      <Navbar solid />
      {showTopBar() && <Topbar pathname={location.pathname} />}
      {children}
    </div>
  ) : null;
};

const errorSelector = createErrorSelector([types.GET_AUTH_USER]);

const mapStateToProps = (state: RootState) => ({
  auth: state.auth,
  error: errorSelector(state),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default withRouter(connector(Dashboard));
