import * as React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import apiMiddleware from './store/middlewares/apiMiddleware';
import config from './config';
import rootReducer from './store/ducks';
import Routes from './views/routes';
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import { ConfirmDialogProvider } from './utils/ConfirmDialogProvider';

const composeEnhancers: any =
  config.ENV === 'production' ? compose : composeWithDevTools;
const enhancers = [applyMiddleware(thunk, apiMiddleware)];
const store = createStore(rootReducer, composeEnhancers(...enhancers));
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConfirmDialogProvider>
        <Routes />
        <ReduxToastr
          timeOut={5000}
          newestOnTop={true}
          position="top-center"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick
        />
      </ConfirmDialogProvider>
    </Provider>
  );
};

export default App;
