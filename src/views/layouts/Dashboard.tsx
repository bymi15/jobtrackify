import * as React from 'react';
import { withRouter, RouteComponentProps, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Topbar from '../../components/Topbar';
import Navbar from '../../components/Navbar';
import { IAuthState } from '../../store/ducks/api/auth';
import { RootState } from '../../store/ducks';
import { CssBaseline } from '@material-ui/core';
import { showToast } from '../../utils/showToast';

interface Props {
  children: React.ReactNode;
  auth: IAuthState;
  location: Location;
}

const Dashboard: React.FC<Props & RouteComponentProps> = ({
  children,
  auth,
  location,
}) => {
  const history = useHistory();

  React.useEffect(() => {
    if (!auth.isAuthenticated && !auth.token) {
      showToast('', 'Please login to proceed', 'warning');
      history.push('/auth/login');
    }
  }, [auth.isAuthenticated, auth.token, history]);

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

const mapStateToProps = (state: RootState) => ({
  auth: state.auth,
});

export default withRouter(connect(mapStateToProps)(Dashboard));
