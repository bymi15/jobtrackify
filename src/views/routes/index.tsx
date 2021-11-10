import * as React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { RootState } from '../../store/ducks';
import { actions } from '../../store/ducks/api/auth';
import {
  RouteComponent,
  ThunkVoidAction,
  ThunkVoidDispatch,
} from '../../store/types';
import ScrollToTop from '../../utils/ScrollToTop';
import {
  AuthLayout,
  DashboardLayout,
  InfoLayout,
  LandingLayout,
  UserLayout,
} from '../layouts';
import {
  authRoutes,
  dashboardRoutes,
  infoRoutes,
  landingRoutes,
  userRoutes,
} from './routes';

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
    <Router basename="/jobtrackify">
      <ScrollToTop />
      <Switch>
        {mapRoutes(AuthLayout, authRoutes)}
        {mapRoutes(LandingLayout, landingRoutes)}
        {mapRoutes(DashboardLayout, dashboardRoutes)}
        {mapRoutes(UserLayout, userRoutes)}
        {mapRoutes(InfoLayout, infoRoutes)}
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
