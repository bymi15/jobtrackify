import * as React from 'react';
import { Redirect, withRouter, RouteComponentProps } from 'react-router-dom';
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
  React.useEffect(() => {
    if (!auth.isAuthenticated) {
      showToast(
        '',
        'Please login or register to access the dashboard',
        'warning'
      );
    }
  }, [auth.isAuthenticated]);
  if (auth.isAuthenticated) {
    return (
      <React.Fragment>
        <CssBaseline />
        <Navbar solid />
        {location.pathname !== '/dashboard' && (
          <Topbar pathname={location.pathname} />
        )}
        {children}
      </React.Fragment>
    );
  } else {
    return <Redirect to="/auth/login" />;
  }
};

const mapStateToProps = (state: RootState) => ({
  auth: state.auth,
});

export default withRouter(connect(mapStateToProps)(Dashboard));
