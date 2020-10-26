import { combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';
import auth from './api/auth';
import board from './api/board';
import boardColumn from './api/boardColumn';
import company from './api/company';
import job from './api/job';
import dashboard from './dashboard';
import loading from './loading';
import error from './error';

const rootReducer = combineReducers({
  loading,
  error,
  toastr,
  auth,
  board,
  boardColumn,
  company,
  job,
  dashboard,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
