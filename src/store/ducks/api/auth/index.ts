import reducer from './reducer';
import * as actions from './actions';
import * as types from './types';
import { IUser } from '../../../models';

export interface IAuthState {
  token: string | null;
  isAuthenticated: boolean;
  user: IUser | null;
}

export { actions };

export { types };

export default reducer;
