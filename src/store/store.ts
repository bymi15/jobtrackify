import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import apiMiddleware from './middlewares/apiMiddleware';
import config from '../config';
import rootReducer from './ducks';
import { persistStore, persistReducer } from 'redux-persist';
import localforage from 'localforage';

const persistConfig = {
  key: 'root',
  storage: localforage,
};
const pReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers: any =
  config.ENV === 'production' ? compose : composeWithDevTools;
const enhancers = [applyMiddleware(thunk, apiMiddleware)];

const store = createStore(pReducer, composeEnhancers(...enhancers));
const persistor = persistStore(store);

export { persistor, store };
