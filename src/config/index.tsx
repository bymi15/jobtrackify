const prod = {
  API_URL: 'https://api.jobtrackify.com',
};

const dev = {
  API_URL: 'http://127.0.0.1:8000',
};

const shared = {
  ENV: process.env.NODE_ENV,
  HOME_URL: 'https://www.jobtrackify.com',
  APP_NAME: 'Job Trackify',
};

const config =
  process.env.NODE_ENV === 'development'
    ? { ...dev, ...shared }
    : { ...prod, ...shared };
export default config;
