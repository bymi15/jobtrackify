import { IJob } from '../../../models';
import _ from 'lodash';

// Groups an array of jobs into an object of arrays keyed by boardColumn
export const groupJobsByColumn = (jobs: IJob[]): any =>
  _.groupBy(jobs, (job: IJob) => job.boardColumn.id);

export const insertGroupedJob = (job: IJob, groupedJobs: any): any => {
  const colId = job.boardColumn.id;
  if (!!groupedJobs) {
    const groupedJobsCopy = _.clone(groupedJobs);
    groupedJobsCopy[colId] = !!groupedJobsCopy[colId]
      ? [...groupedJobsCopy[colId], job]
      : [job];
    return groupedJobsCopy;
  } else {
    return { colId: [job] };
  }
};

export const removeGroupedJob = (job: IJob, groupedJobs: any): any => {
  const groupedJobsCopy = _.clone(groupedJobs);
  groupedJobsCopy[job.boardColumn.id] = _.filter(
    groupedJobsCopy[job.boardColumn.id],
    (j: IJob) => j.id !== job.id
  );
  return groupedJobsCopy;
};

export const updateGroupedJob = (updatedJob: IJob, groupedJobs: any): any => {
  const colId = updatedJob.boardColumn.id;
  const groupedJobsCopy = _.clone(groupedJobs);
  groupedJobsCopy[colId] = _.map(groupedJobsCopy[colId], (job: IJob) =>
    job.id === updatedJob.id ? updatedJob : job
  );
  return groupedJobsCopy;
};

export const moveGroupedJobs = (
  groupedJobs: any,
  oldColumn: string,
  newColumn: string,
  oldIndex: number,
  newIndex: number
): any => {
  const groupedJobsCopy = _.clone(groupedJobs);
  const movedJob: IJob = groupedJobsCopy[oldColumn].splice(oldIndex, 1)[0];
  if (groupedJobsCopy[newColumn]) {
    groupedJobsCopy[newColumn].splice(newIndex, 0, movedJob);
  } else {
    groupedJobsCopy[newColumn] = [movedJob];
  }
  return groupedJobsCopy;
};

type DeletedJobPair = { deletedJob?: IJob; newJobs: IJob[] };
export const findAndDeleteJobById = (
  id: string,
  jobs: IJob[]
): DeletedJobPair => {
  let deletedJob: IJob | undefined = undefined;
  let newJobs: IJob[] = [];
  let index = -1;
  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].id === id) {
      deletedJob = jobs[i];
      index = i;
      break;
    }
  }
  if (index >= 0) {
    newJobs = [...jobs.slice(0, index), ...jobs.slice(index + 1)];
  }
  return { deletedJob, newJobs };
};
