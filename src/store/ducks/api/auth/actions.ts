import { Dispatch } from 'redux';
import { RootState } from '../..';
import authHeader from '../../../utils/authHeader';
import { ThunkVoidAction } from '../../../types';
import * as types from './types';

const baseUrl = '/api/auth';

export const getUser = (): ThunkVoidAction => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  dispatch({
    type: 'API',
    name: types.GET_USER,
    url: `${baseUrl}/user/`,
    requestData: {
      method: 'GET',
      headers: authHeader(getState()),
    },
  });
};

export const login = (data: any): ThunkVoidAction => (dispatch: Dispatch) => {
  dispatch({
    type: 'API',
    name: types.LOGIN,
    url: `${baseUrl}/login/`,
    requestData: {
      method: 'POST',
      body: data,
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
      body: data,
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
  dispatch({
    type: `${types.GET_USER}_CLEARERR`,
  });
};
