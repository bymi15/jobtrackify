import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import apiMiddleware from './store/middlewares/apiMiddleware';
import config from './config';
import rootReducer from './store/ducks';
import { ConfirmDialogProvider } from './utils/ConfirmDialogProvider';
import { InputDialogProvider } from './utils/InputDialogProvider';
import composeProviders from './utils/composeProviders';
import ReactGA from 'react-ga';
ReactGA.initialize('G-TPD5N3Z4B2');

const composeEnhancers: any =
  config.ENV === 'production' ? compose : composeWithDevTools;

const enhancers = [applyMiddleware(thunk, apiMiddleware)];

const store = createStore(rootReducer, composeEnhancers(...enhancers));

const WrappedApp = composeProviders(
  ConfirmDialogProvider,
  InputDialogProvider
)(App);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <WrappedApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();