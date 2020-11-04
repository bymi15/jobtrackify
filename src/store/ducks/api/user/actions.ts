import { Dispatch } from 'redux';
import { RootState } from '../..';
import authHeader from '../../../utils/authHeader';
import { ThunkVoidAction } from '../../../types';
import * as types from './types';
import { IUserUpdate } from '../../../models';

const baseUrl = '/api/users';

export const getUser = (id: string): ThunkVoidAction => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  dispatch({
    type: 'API',
    name: types.GET_USER,
    url: `${baseUrl}/${id}`,
    requestData: {
      method: 'GET',
      headers: authHeader(getState()),
    },
  });
};

export const getUsers = (): ThunkVoidAction => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  dispatch({
    type: 'API',
    name: types.GET_USERS,
    url: `${baseUrl}/`,
    requestData: {
      method: 'GET',
      headers: authHeader(getState()),
    },
  });
};

export const updateUser = (id: string, data: IUserUpdate): ThunkVoidAction => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  dispatch({
    type: 'API',
    name: types.UPDATE_USER,
    url: `${baseUrl}/${id}`,
    requestData: {
      method: 'PATCH',
      headers: authHeader(getState()),
      data,
    },
  });
};

export const deleteUser = (id: string): ThunkVoidAction => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  dispatch({
    type: 'API',
    name: types.DELETE_USER,
    url: `${baseUrl}/${id}`,
    requestData: {
      method: 'DELETE',
      headers: authHeader(getState()),
    },
    extraData: {
      id,
    },
  });
};

export const clearErrors = (): ThunkVoidAction => (dispatch: Dispatch) => {
  dispatch({
    type: `${types.GET_USER}_CLEARERR`,
  });
  dispatch({
    type: `${types.GET_USERS}_CLEARERR`,
  });
  dispatch({
    type: `${types.UPDATE_USER}_CLEARERR`,
  });
  dispatch({
    type: `${types.DELETE_USER}_CLEARERR`,
  });
};
