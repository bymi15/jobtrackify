import * as React from 'react';
import { Redirect, withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import Topbar from '../../components/Topbar';
import Navbar from '../../components/Navbar';
import { IAuthState } from '../../store/ducks/api/auth';
import { RootState } from '../../store/ducks';

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
  if (auth.isAuthenticated) {
    return (
      <React.Fragment>
        <Navbar />
        {location.pathname === '/dashboard' ? '' : <Topbar />}
        <div>{children}</div>
      </React.Fragment>
    );
  } else {
    return <Redirect to="/" />;
  }
};

const mapStateToProps = (state: RootState) => ({
  auth: state.auth,
});

export default withRouter(connect(mapStateToProps)(Dashboard));
