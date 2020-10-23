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

const Routes: React.FC = () => {
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

export default Routes;
