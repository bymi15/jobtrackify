import { IJob } from '../../../models';
import _ from 'lodash';

// Groups an array of jobs into an object of arrays keyed by boardColumn
// and sorts the jobs by ascending order of sortOrder
export const groupJobsByColumn = (jobs: IJob[]): any =>
  _(jobs)
    .groupBy((job: IJob) => job.boardColumn.id)
    .toPairs()
    .sortBy(([_key, jobs]) => jobs, 'sortOrder')
    .map(([key, jobs]) => ({ [key]: jobs }))
    .reduce(_.extend);
