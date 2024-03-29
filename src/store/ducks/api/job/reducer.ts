import { clone } from 'lodash';
import { PURGE } from 'redux-persist';
import { IJob } from '../../../models';
import { ApiAction } from '../../../types';
import { IJobState } from './index';
import * as types from './types';
import {
  insertGroupedJob,
  removeGroupedJob,
  findAndDeleteJobById,
  groupJobsByColumn,
  moveGroupedJobs,
  updateGroupedJob,
} from './utils';

const initialState: IJobState = {
  job: null,
  jobs: null,
  groupedJobs: null,
  currentJobsBoardId: '',
};

const reducer = (
  state: IJobState = initialState,
  action: ApiAction
): IJobState => {
  let jobs, groupedJobs;
  switch (action.type) {
    case PURGE:
      return initialState;
    case `${types.CREATE_JOB}_SUCCESS`:
      const insertJob: IJob = action.response;
      jobs = !!state.jobs ? [...state.jobs, insertJob] : [insertJob];
      return {
        ...state,
        jobs,
        groupedJobs: insertGroupedJob(insertJob, state.groupedJobs),
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
      return {
        ...state,
        jobs: action.response,
        groupedJobs: groupJobsByColumn(action.response),
        currentJobsBoardId: action.extraData.boardId,
      };
    case `${types.DELETE_JOB}_SUCCESS`:
      const { deletedJob, newJobs } = findAndDeleteJobById(
        action.extraData.id,
        state.jobs || []
      );
      if (!deletedJob) return state;
      return {
        ...state,
        job:
          state.job && state.job.id === action.extraData.id ? null : state.job,
        jobs: newJobs,
        groupedJobs: removeGroupedJob(deletedJob, state.groupedJobs),
      };
    case `${types.UPDATE_JOB}_SUCCESS`:
      const updatedJob: IJob = action.response;
      if (!state.jobs) return state;
      let updatedIndex = state.jobs.findIndex(
        (job) => job.id === updatedJob.id
      );
      const updatedJobs = clone(state.jobs);
      updatedJobs[updatedIndex] = updatedJob;
      groupedJobs = updateGroupedJob(updatedJob, state.groupedJobs);
      return {
        ...state,
        jobs: updatedJobs,
        groupedJobs,
      };
    case `${types.MOVE_JOB_UI}_SUCCESS`:
      const { oldColumn, newColumn, oldIndex, newIndex } = action.response;
      groupedJobs = moveGroupedJobs(
        state.groupedJobs,
        oldColumn,
        newColumn,
        oldIndex,
        newIndex
      );
      return {
        ...state,
        groupedJobs,
      };
    default:
      return state;
  }
};

export default reducer;
