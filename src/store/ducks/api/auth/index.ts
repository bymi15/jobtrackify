import reducer from './reducer';
import * as actions from './actions';
import * as types from './types';
import { IUser } from '../../../models';

export interface IAuthState {
  token: string | null;
  isAuthenticated: boolean;
  user: IUser | null;
  updatedProfile: boolean;
  deletedAccount: boolean;
  changedPassword: boolean;
  confirmedEmail: boolean;
}

export { actions };

export { types };

export default reducer;
