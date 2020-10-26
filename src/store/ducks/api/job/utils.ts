import { IBoardColumn, IJob } from '../../../models';
import { groupBy } from 'lodash';

export const groupJobsByColumn = (jobs: IJob[]): any =>
  groupBy(jobs, (job: IJob) => (job.boardColumn as IBoardColumn).id);
