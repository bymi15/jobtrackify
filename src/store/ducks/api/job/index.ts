import reducer from './reducer';
import * as actions from './actions';
import * as types from './types';
import { IJob } from '../../../models';

export interface IJobState {
  job: IJob | null;
  jobs: IJob[] | null;
  groupedJobs: any | null;
}

export { actions };

export { types };

export default reducer;
