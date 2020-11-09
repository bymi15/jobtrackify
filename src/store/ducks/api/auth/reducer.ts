import { PURGE } from 'redux-persist';
import { ApiAction } from '../../../types';
import { IAuthState } from './index';
import * as types from './types';

const initialState: IAuthState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  user: null,
  updatedProfile: false,
  deletedAccount: false,
  changedPassword: false,
  confirmedEmail: false,
};

const reducer = (
  state: IAuthState = initialState,
  action: ApiAction
): IAuthState => {
  switch (action.type) {
    case PURGE:
      localStorage.removeItem('token');
      return { ...initialState, token: null };

    case `${types.GET_AUTH_USER}_SUCCESS`:
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
        user: action.response.user,
        token: action.response.token,
        isAuthenticated: true,
      };

    case `${types.CONFIRM_EMAIL}_SUCCESS`:
      return {
        ...state,
        confirmedEmail: true,
      };

    case `${types.GET_AUTH_USER}_FAILURE`:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
      };

    case `${types.UPDATE_PROFILE}_SUCCESS`:
      return {
        ...state,
        user: action.response,
        updatedProfile: true,
      };
    case `${types.CHANGE_PASSWORD}_SUCCESS`:
      return {
        ...state,
        user: action.response,
        changedPassword: true,
      };
    case `${types.DELETE_ACCOUNT}_SUCCESS`:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        deletedAccount: true,
      };
    case types.RESET_FLAGS:
      return {
        ...state,
        updatedProfile: false,
        changedPassword: false,
        deletedAccount: false,
        confirmedEmail: false,
      };
    default:
      return state;
  }
};

export default reducer;
