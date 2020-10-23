import { ApiAction } from '../../../types';
import { IAuthState } from './index';
import * as types from './types';

const initialState: IAuthState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  user: null,
};

const reducer = (
  state: IAuthState = initialState,
  action: ApiAction
): IAuthState => {
  switch (action.type) {
    case `${types.GET_USER}_SUCCESS`:
      return {
        ...state,
        isAuthenticated: true,
        user: action.response,
      };

    case `${types.REGISTER}_SUCCESS`:
    case `${types.LOGIN}_SUCCESS`:
      localStorage.setItem('token', action.response.token);
      return {
        ...state,
        ...action.response,
        isAuthenticated: true,
      };

    case 'LOGOUT_SUCCESS':
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
      };

    default:
      return state;
  }
};

export default reducer;
