import { Dispatch } from 'redux';
import { RootState } from '../..';
import authHeader from '../../../utils/authHeader';
import { ThunkVoidAction } from '../../../types';
import * as types from './types';
import { IJobInput } from '../../../models';
import { IJob, IJobUpdate } from '../../../models/IJob';
import cache from '../../../cache';

const baseUrl = '/api/jobs';

export const createJob = (data: IJobInput): ThunkVoidAction => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  dispatch({
    type: 'API',
    name: types.CREATE_JOB,
    url: baseUrl,
    requestData: {
      method: 'POST',
      data,
      headers: authHeader(getState()),
    },
  });
};

export const getJob = (id: string): ThunkVoidAction => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  dispatch({
    type: 'API',
    name: types.GET_JOB,
    url: `${baseUrl}/${id}`,
    requestData: {
      method: 'GET',
      headers: authHeader(getState()),
    },
  });
};

export const getJobs = (): ThunkVoidAction => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  dispatch({
    type: 'API',
    name: types.GET_JOBS,
    url: `${baseUrl}/`,
    requestData: {
      method: 'GET',
      headers: authHeader(getState()),
    },
  });
};

export const getJobsByUser = (): ThunkVoidAction => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  dispatch({
    type: 'API',
    name: types.GET_JOBS_USER,
    url: `${baseUrl}/user`,
    requestData: {
      method: 'GET',
      headers: authHeader(getState()),
    },
  });
};

export const getJobsByBoard = (boardId: string): ThunkVoidAction => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  cache.get(
    'jobsByBoard',
    () =>
      dispatch({
        type: 'API',
        name: types.GET_JOBS_BOARD,
        url: `${baseUrl}/board/${boardId}`,
        requestData: {
          method: 'GET',
          headers: authHeader(getState()),
        },
      }),
    (item: unknown) =>
      dispatch({ type: types.SET_JOBS_BOARD_CACHE, response: item })
  );
};

export const deleteJob = (job: IJob): ThunkVoidAction => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  dispatch({
    type: 'API',
    name: types.DELETE_JOB,
    url: `${baseUrl}/${job.id}`,
    requestData: {
      method: 'DELETE',
      headers: authHeader(getState()),
    },
    extraData: {
      id: job.id,
    },
  });
};

export const updateJob = (id: string, job: IJobUpdate): ThunkVoidAction => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  dispatch({
    type: 'API',
    name: types.UPDATE_JOB,
    url: `${baseUrl}/${id}`,
    requestData: {
      method: 'PATCH',
      headers: authHeader(getState()),
      data: job,
    },
  });
};

export const moveJob = (
  id: string,
  boardColumn: string,
  prevJobId?: string
): ThunkVoidAction => (dispatch: Dispatch, getState: () => RootState) => {
  dispatch({
    type: 'API',
    name: types.MOVE_JOB,
    url: `${baseUrl}/${id}/move`,
    requestData: {
      method: 'PATCH',
      headers: authHeader(getState()),
      data: { boardColumn, prevJobId },
    },
  });
};

export const moveJobUI = (
  oldColumn: string,
  newColumn: string,
  oldIndex: number,
  newIndex: number
): ThunkVoidAction => (dispatch: Dispatch) => {
  dispatch({
    type: `${types.MOVE_JOB_UI}_SUCCESS`,
    response: { oldColumn, newColumn, oldIndex, newIndex },
  });
};

export const clearErrors = (): ThunkVoidAction => (dispatch: Dispatch) => {
  dispatch({
    type: `${types.GET_JOB}_CLEARERR`,
  });
  dispatch({
    type: `${types.GET_JOBS}_CLEARERR`,
  });
  dispatch({
    type: `${types.GET_JOBS_USER}_CLEARERR`,
  });
  dispatch({
    type: `${types.GET_JOBS_BOARD}_CLEARERR`,
  });
  dispatch({
    type: `${types.CREATE_JOB}_CLEARERR`,
  });
  dispatch({
    type: `${types.UPDATE_JOB}_CLEARERR`,
  });
  dispatch({
    type: `${types.DELETE_JOB}_CLEARERR`,
  });
};
