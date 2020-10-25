import { Dispatch } from 'redux';
import { RootState } from '../..';
import authHeader from '../../../utils/authHeader';
import { ThunkVoidAction } from '../../../types';
import * as types from './types';

const baseUrl = '/api/auth';

export const getAuthUser = (): ThunkVoidAction => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  dispatch({
    type: 'API',
    name: types.GET_AUTH_USER,
    url: `${baseUrl}/user/`,
    requestData: {
      method: 'GET',
      headers: authHeader(getState()),
    },
    ignoreErrors: true,
  });
};

export const login = (data: any): ThunkVoidAction => (dispatch: Dispatch) => {
  dispatch({
    type: 'API',
    name: types.LOGIN,
    url: `${baseUrl}/login/`,
    requestData: {
      method: 'POST',
      data,
    },
  });
};

export const logout = (): ThunkVoidAction => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  dispatch({
    type: 'API',
    name: types.LOGOUT,
    url: `${baseUrl}/logout/`,
    requestData: {
      method: 'GET',
      headers: authHeader(getState()),
    },
    ignoreErrors: true,
  });
};

export const register = (data: any): ThunkVoidAction => (
  dispatch: Dispatch
) => {
  dispatch({
    type: 'API',
    name: types.REGISTER,
    url: `${baseUrl}/register/`,
    requestData: {
      method: 'POST',
      data,
    },
  });
};

export const clearErrors = (): ThunkVoidAction => (dispatch: Dispatch) => {
  dispatch({
    type: `${types.LOGIN}_CLEARERR`,
  });
  dispatch({
    type: `${types.REGISTER}_CLEARERR`,
  });
};
