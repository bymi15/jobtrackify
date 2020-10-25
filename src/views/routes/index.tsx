import * as React from 'react';
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { RouteComponent } from '../../store/types';
import ScrollToTop from '../../utils/ScrollToTop';
import { landingRoutes, authRoutes, dashboardRoutes } from './routes';
import { LandingLayout, DashboardLayout, AuthLayout } from '../layouts';
import { ThunkVoidAction, ThunkVoidDispatch } from '../../store/types';
import { actions } from '../../store/ducks/api/auth';
import { RootState } from '../../store/ducks';
import { connect, ConnectedProps } from 'react-redux';

const Routes: React.FC<PropsFromRedux> = ({ auth, dispatchGetAuthUser }) => {
  React.useEffect(() => {
    if (!!auth && !!dispatchGetAuthUser) {
      if (!!auth.token && (auth.user === null || !auth.isAuthenticated)) {
        dispatchGetAuthUser();
      }
    }
  }, [auth, dispatchGetAuthUser]);

  const mapRoutes = (Layout: any, routes: RouteComponent[]) =>
    routes.map(({ path, component: Component }, index) => (
      <Route
        key={index}
        path={path}
        exact
        render={(props) => (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      />
    ));

  return (
    <Router>
      <ScrollToTop />
      <Switch>
        {mapRoutes(AuthLayout, authRoutes)}
        {mapRoutes(LandingLayout, landingRoutes)}
        {mapRoutes(DashboardLayout, dashboardRoutes)}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state: RootState) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch: ThunkVoidDispatch) => ({
  dispatchGetAuthUser: (): ThunkVoidAction => dispatch(actions.getAuthUser()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Routes);
