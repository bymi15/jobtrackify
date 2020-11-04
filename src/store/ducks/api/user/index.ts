import reducer from './reducer';
import * as actions from './actions';
import * as types from './types';
import { IUser } from '../../../models';

export interface IUserState {
  user: IUser | null;
  users: IUser[] | null;
}

export { actions };

export { types };

export default reducer;
