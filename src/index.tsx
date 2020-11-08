import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { ConfirmDialogProvider } from './utils/ConfirmDialogProvider';
import { InputDialogProvider } from './utils/InputDialogProvider';
import composeProviders from './utils/composeProviders';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import Loader from './components/Loader';
import ReactGA from 'react-ga';
ReactGA.initialize('G-TPD5N3Z4B2');

const WrappedApp = composeProviders(
  ConfirmDialogProvider,
  InputDialogProvider
)(App);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <WrappedApp />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
