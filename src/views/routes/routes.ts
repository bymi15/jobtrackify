import async from '../../utils/AsyncImport';
import Landing from '../pages';
import Login from '../pages/auth/Login';
import { RouteComponent } from '../../store/types';
import Register from '../pages/auth/Register';
import About from '../pages/about/About';
import Privacy from '../pages/about/Privacy';
import Terms from '../pages/about/Terms';
import DashboardInterviews from '../pages/dashboard/interviews';
import DashboardNotes from '../pages/dashboard/notes';
import UserProfile from '../pages/user/Profile';
import UserSettings from '../pages/user/Settings';
import UserEmailPreferences from '../pages/user/EmailPreferences';
const Dashboard = async(() => import('../pages/dashboard'));
const DashboardBoard = async(() => import('../pages/dashboard/board'));
const DashboardMap = async(() => import('../pages/dashboard/map'));

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

const dashboardInterviewsRoute = {
  path: '/dashboard/interviews',
  component: DashboardInterviews,
};

const dashboardNotesRoute = {
  path: '/dashboard/notes',
  component: DashboardNotes,
};

const userSettingsRoute = {
  path: '/user/settings',
  component: UserSettings,
};

const userProfileRoute = {
  path: '/user/profile',
  component: UserProfile,
};

const userEmailPreferencesRoute = {
  path: '/user/email-preferences',
  component: UserEmailPreferences,
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
  dashboardInterviewsRoute,
  dashboardNotesRoute,
];

export const userRoutes: RouteComponent[] = [
  userProfileRoute,
  userSettingsRoute,
  userEmailPreferencesRoute,
];

export const infoRoutes: RouteComponent[] = [
  aboutRoute,
  privacyRoute,
  termsRoute,
];
