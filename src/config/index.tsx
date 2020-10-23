const prod = {
  API_URL: 'https://jobtrackify.herokuapp.com',
};

const dev = {
  API_URL: 'http://127.0.0.1:8000',
};

const shared = {
  env: process.env.NODE_ENV,
};

const config =
  process.env.NODE_ENV === 'development'
    ? { ...dev, ...shared }
    : { ...prod, ...shared };
export default config;
