import * as React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import apiMiddleware from './store/middlewares/apiMiddleware';
import config from './config';
import rootReducer from './store/ducks';
import Routes from './views/routes';

const composeEnhancers: any =
  config.env === 'production' ? compose : composeWithDevTools;
const enhancers = [applyMiddleware(thunk, apiMiddleware)];
const store = createStore(rootReducer, composeEnhancers(...enhancers));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
