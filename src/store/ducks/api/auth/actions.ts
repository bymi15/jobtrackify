import { Dispatch } from 'redux';
import { RootState } from '../..';
import authHeader from '../../../utils/authHeader';
import { ThunkVoidAction } from '../../../types';
import * as types from './types';
import { IUserChangePassword, IUserUpdate } from '../../../models/IUser';

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

export const logout = (): ThunkVoidAction => async (
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
      data,
    },
  });
};

export const updateProfile = (data: IUserUpdate): ThunkVoidAction => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  dispatch({
    type: 'API',
    name: types.UPDATE_PROFILE,
    url: `${baseUrl}/profile`,
    requestData: {
      method: 'PATCH',
      headers: authHeader(getState()),
      data,
    },
  });
};

export const changePassword = (data: IUserChangePassword): ThunkVoidAction => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  dispatch({
    type: 'API',
    name: types.CHANGE_PASSWORD,
    url: `${baseUrl}/changePassword`,
    requestData: {
      method: 'PUT',
      headers: authHeader(getState()),
      data,
    },
  });
};

export const deleteAccount = (): ThunkVoidAction => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  dispatch({
    type: 'API',
    name: types.DELETE_ACCOUNT,
    url: `${baseUrl}/deleteAccount`,
    requestData: {
      method: 'DELETE',
      headers: authHeader(getState()),
    },
    extraData: {
      id: getState().auth.user?.id,
    },
  });
};

export const confirmEmail = (token: string): ThunkVoidAction => (
  dispatch: Dispatch
) => {
  dispatch({
    type: 'API',
    name: types.CONFIRM_EMAIL,
    url: `${baseUrl}/confirmEmail/${token}`,
    requestData: {
      method: 'GET',
    },
  });
};

export const resendConfirmEmail = (): ThunkVoidAction => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  dispatch({
    type: 'API',
    name: types.RESEND_CONFIRM_EMAIL,
    url: `${baseUrl}/resendEmail`,
    requestData: {
      method: 'GET',
      headers: authHeader(getState()),
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
    type: `${types.UPDATE_PROFILE}_CLEARERR`,
  });
  dispatch({
    type: `${types.CHANGE_PASSWORD}_CLEARERR`,
  });
  dispatch({
    type: `${types.DELETE_ACCOUNT}_CLEARERR`,
  });
  dispatch({
    type: `${types.CONFIRM_EMAIL}_CLEARERR`,
  });
};

export const resetFlags = (): ThunkVoidAction => (dispatch: Dispatch) => {
  dispatch({
    type: types.RESET_FLAGS,
  });
};
