import { Dispatch } from 'redux';
import { RootState } from '../..';
import authHeader from '../../../utils/authHeader';
import { ThunkVoidAction } from '../../../types';
import * as types from './types';
import { INoteInput, INoteUpdate } from '../../../models';

const baseUrl = '/api/notes';

export const createNote = (note: INoteInput): ThunkVoidAction => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  dispatch({
    type: 'API',
    name: types.CREATE_NOTE,
    url: baseUrl,
    requestData: {
      method: 'POST',
      data: note,
      headers: authHeader(getState()),
    },
  });
};

export const getNotes = (): ThunkVoidAction => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  dispatch({
    type: 'API',
    name: types.GET_NOTES,
    url: `${baseUrl}/`,
    requestData: {
      method: 'GET',
      headers: authHeader(getState()),
    },
  });
};

export const getNotesByBoard = (boardId: string): ThunkVoidAction => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  dispatch({
    type: 'API',
    name: types.GET_NOTES_BOARD,
    url: `${baseUrl}/board/${boardId}`,
    requestData: {
      method: 'GET',
      headers: authHeader(getState()),
    },
  });
};

export const getNotesByJob = (jobId: string): ThunkVoidAction => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  dispatch({
    type: 'API',
    name: types.GET_NOTES_JOB,
    url: `${baseUrl}/job/${jobId}`,
    requestData: {
      method: 'GET',
      headers: authHeader(getState()),
    },
  });
};

export const deleteNote = (id: string): ThunkVoidAction => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  dispatch({
    type: 'API',
    name: types.DELETE_NOTE,
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

export const updateNote = (id: string, note: INoteUpdate): ThunkVoidAction => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  dispatch({
    type: 'API',
    name: types.UPDATE_NOTE,
    url: `${baseUrl}/${id}`,
    requestData: {
      method: 'PATCH',
      headers: authHeader(getState()),
      data: note,
    },
  });
};

export const clearErrors = (): ThunkVoidAction => (dispatch: Dispatch) => {
  dispatch({
    type: `${types.GET_NOTES}_CLEARERR`,
  });
  dispatch({
    type: `${types.GET_NOTES_BOARD}_CLEARERR`,
  });
  dispatch({
    type: `${types.GET_NOTES_JOB}_CLEARERR`,
  });
  dispatch({
    type: `${types.CREATE_NOTE}_CLEARERR`,
  });
  dispatch({
    type: `${types.UPDATE_NOTE}_CLEARERR`,
  });
  dispatch({
    type: `${types.DELETE_NOTE}_CLEARERR`,
  });
};
