import { combineReducers } from 'redux';
import auth from './api/auth';
import board from './api/board';
import dashboard from './dashboard';

const rootReducer = combineReducers({
  auth,
  board,
  dashboard,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
