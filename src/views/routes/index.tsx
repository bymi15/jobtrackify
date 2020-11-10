import * as React from 'react';
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { RouteComponent } from '../../store/types';
import ScrollToTop from '../../utils/ScrollToTop';
import {
  landingRoutes,
  authRoutes,
  dashboardRoutes,
  userRoutes,
  infoRoutes,
} from './routes';
import {
  LandingLayout,
  DashboardLayout,
  UserLayout,
  AuthLayout,
  InfoLayout,
} from '../layouts';
import { ThunkVoidAction, ThunkVoidDispatch } from '../../store/types';
import { actions } from '../../store/ducks/api/auth';
import { actions as companyActions } from '../../store/ducks/api/company';
import { RootState } from '../../store/ducks';
import { connect, ConnectedProps } from 'react-redux';

const Routes: React.FC<PropsFromRedux> = ({
  auth,
  companies,
  dispatchGetAuthUser,
  dispatchGetCompanies,
}) => {
  React.useEffect(() => {
    if (!!auth && !!dispatchGetAuthUser) {
      if (!!auth.token && (auth.user === null || !auth.isAuthenticated)) {
        dispatchGetAuthUser();
      }
      if (auth.isAuthenticated) {
        if (!companies) {
          dispatchGetCompanies();
        }
      }
    }
  }, [auth, companies, dispatchGetAuthUser, dispatchGetCompanies]);

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
        {mapRoutes(UserLayout, userRoutes)}
        {mapRoutes(InfoLayout, infoRoutes)}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state: RootState) => ({
  auth: state.auth,
  companies: state.company.companies,
});

const mapDispatchToProps = (dispatch: ThunkVoidDispatch) => ({
  dispatchGetAuthUser: (): ThunkVoidAction => dispatch(actions.getAuthUser()),
  dispatchGetCompanies: (): ThunkVoidAction =>
    dispatch(companyActions.getCompanies()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Routes);
