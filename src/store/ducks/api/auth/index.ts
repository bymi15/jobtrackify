import reducer from './reducer';
import * as actions from './actions';
import { IUser } from '../../../models';

export interface IAuthState {
  token: string | null;
  isAuthenticated: boolean;
  user: IUser | null;
}

export { actions };

export default reducer;
