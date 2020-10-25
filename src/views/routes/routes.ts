import async from '../../utils/AsyncImport';
import Landing from '../pages/landing';
import Login from '../pages/auth/Login';
import { RouteComponent } from '../../store/types';
import Register from '../pages/auth/Register';
const Dashboard = async(() => import('../pages/dashboard'));
// const DashboardBoard = async(() =>
//   import('../containers/dashboard/board/Board')
// );

const landingRoute: RouteComponent = {
  path: '/',
  component: Landing,
};

const dashboardRoute: RouteComponent = {
  path: '/dashboard',
  component: Dashboard,
};

// const dashboardBoardRoute = {
//   path: '/dashboard/board',
//   component: DashboardBoard,
// };

// const dashboardMapRoute = {
//   path: '/dashboard/map',
//   component: DashboardMap,
// };

// const dashboardStatsRoute = {
//   path: '/dashboard/stats',
//   component: DashboardStats,
// };

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
  //   dashboardMapRoute,
  //   dashboardStatsRoute,
  //   dashboardBoardRoute,
];
