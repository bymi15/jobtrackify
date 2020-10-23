import { Dispatch } from 'redux';
import { RootState } from '../..';
import authHeader from '../../../utils/authHeader';
import { ThunkVoidAction } from '../../../types';
import * as types from './types';

const baseUrl = '/api/boards';

export const getBoard = (id: string): ThunkVoidAction => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  dispatch({
    type: 'API',
    name: types.GET_BOARD,
    url: `${baseUrl}/${id}`,
    requestData: {
      method: 'GET',
      headers: authHeader(getState()),
    },
  });
};

export const getBoards = (): ThunkVoidAction => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  dispatch({
    type: 'API',
    name: types.GET_BOARDS,
    url: `${baseUrl}/`,
    requestData: {
      method: 'GET',
      headers: authHeader(getState()),
    },
  });
};

export const clearErrors = (): ThunkVoidAction => (dispatch: Dispatch) => {
  dispatch({
    type: `${types.GET_BOARD}_CLEARERR`,
  });
  dispatch({
    type: `${types.GET_BOARDS}_CLEARERR`,
  });
};
