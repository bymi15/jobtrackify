import _ from 'lodash';
import { IJob } from '../store/models';

const inRange = (x: any, min: number, max: number) => x >= min && x <= max;

const filterJobsForMap = (jobs: IJob[]): IJob[] =>
  _.filter(
    jobs,
    (job) =>
      !!job.location &&
      inRange(job.location.lat, -90, 90) &&
      inRange(job.location.lng, -90, 90)
  );

export default filterJobsForMap;
