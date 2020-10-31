import async from '../../utils/AsyncImport';
import Landing from '../pages/landing';
import Login from '../pages/auth/Login';
import { RouteComponent } from '../../store/types';
import Register from '../pages/auth/Register';
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

export const landingRoutes: RouteComponent[] = [landingRoute];

export const authRoutes: RouteComponent[] = [loginRoute, registerRoute];

export const dashboardRoutes: RouteComponent[] = [
  dashboardRoute,
  dashboardBoardRoute,
  dashboardMapRoute,
  dashboardStatisticsRoute,
];
