const DEPLOY_ENV = process.env.REACT_APP_DEPLOY_ENV;

const BACKENDS = {
  dev: 'https://api-trader-dev.latipay.net',
  localhost: 'http://localhost:5000',
};

export default {
  backend: {
    base: BACKENDS[DEPLOY_ENV] || BACKENDS.dev,
  },
};
