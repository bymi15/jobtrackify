import async from '../../utils/AsyncImport';
import Landing from '../pages';
import Login from '../pages/auth/Login';
import { RouteComponent } from '../../store/types';
import Register from '../pages/auth/Register';
import About from '../pages/about/About';
import Privacy from '../pages/about/Privacy';
import Terms from '../pages/about/Terms';
import DashboardMap from '../pages/dashboard/map';
import DashboardStatistics from '../pages/dashboard/statistics';
const Dashboard = async(() => import('../pages/dashboard'));
const DashboardBoard = async(() => import('../pages/dashboard/board'));

const landingRoute: RouteComponent = {
  path: '/',
  component: Landing,
};

const dashboardRoute: RouteComponent = {
  path: '/dashboard',
  component: Dashboard,
};

const dashboardBoardRoute = {
  path: '/dashboard/board',
  component: DashboardBoard,
};

const dashboardMapRoute = {
  path: '/dashboard/map',
  component: DashboardMap,
};

const dashboardStatisticsRoute = {
  path: '/dashboard/statistics',
  component: DashboardStatistics,
};

const loginRoute = {
  path: '/auth/login',
  component: Login,
};

const registerRoute = {
  path: '/auth/register',
  component: Register,
};

const aboutRoute = {
  path: '/about',
  component: About,
};

const privacyRoute = {
  path: '/privacy',
  component: Privacy,
};

const termsRoute = {
  path: '/terms',
  component: Terms,
};

export const landingRoutes: RouteComponent[] = [landingRoute];

export const authRoutes: RouteComponent[] = [loginRoute, registerRoute];

export const dashboardRoutes: RouteComponent[] = [
  dashboardRoute,
  dashboardBoardRoute,
  dashboardMapRoute,
  dashboardStatisticsRoute,
];

export const infoRoutes: RouteComponent[] = [
  aboutRoute,
  privacyRoute,
  termsRoute,
];
