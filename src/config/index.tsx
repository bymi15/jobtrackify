const prod = {
  API_URL: 'https://jobtrackify.herokuapp.com',
};

const dev = {
  API_URL: 'http://127.0.0.1:8000',
};

const shared = {
  ENV: process.env.NODE_ENV,
  HOME_URL: 'https://brianmin.com/jobtrackify',
  APP_NAME: 'Job Trackify',
  EMAIL: 'jobtrackify@gmail.com',
  GOOGLE_API_KEY: process.env.REACT_APP_GOOGLE_API_KEY,
};

const config =
  process.env.NODE_ENV === 'development'
    ? { ...dev, ...shared }
    : { ...prod, ...shared };
export default config;
