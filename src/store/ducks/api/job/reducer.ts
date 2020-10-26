import { ApiAction } from '../../../types';
import { IJobState } from './index';
import * as types from './types';
import { groupJobsByColumn } from './utils';

const initialState: IJobState = {
  job: null,
  jobs: null,
  groupedJobs: null,
};

const reducer = (
  state: IJobState = initialState,
  action: ApiAction
): IJobState => {
  switch (action.type) {
    case `${types.CREATE_JOB}_SUCCESS`:
      return state.jobs
        ? {
            ...state,
            jobs: [action.response, ...state.jobs],
            groupedJobs: groupJobsByColumn([action.response, ...state.jobs]),
          }
        : {
            ...state,
            jobs: [action.response],
            groupedJobs: groupJobsByColumn(action.response),
          };
    case `${types.GET_JOB}_SUCCESS`:
      return {
        ...state,
        job: action.response,
      };
    case `${types.GET_JOBS}_SUCCESS`:
    case `${types.GET_JOBS_USER}_SUCCESS`:
      return {
        ...state,
        jobs: action.response,
      };
    case `${types.GET_JOBS_BOARD}_SUCCESS`:
      const res = action.response;
      return {
        ...state,
        jobs: res,
        groupedJobs: groupJobsByColumn(res),
      };
    case `${types.DELETE_JOB}_SUCCESS`:
      const deletedId = action.extraData.id;
      const jobs =
        state.jobs && state.jobs.filter((job) => job.id !== deletedId);
      let job = state.job;
      if (job && job.id === deletedId) {
        job = null;
      }
      const groupedJobs = jobs && groupJobsByColumn(jobs);
      return {
        ...state,
        job,
        jobs,
        groupedJobs,
      };
    default:
      return state;
  }
};

export default reducer;
