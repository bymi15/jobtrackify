import _ from 'lodash';
import {
  IGeocodePin,
  IGeocodePinResponse,
  IJob,
  IJobLocation,
} from '../../models';

export const getJobsFromJobLocations = (
  jobLocations: IJobLocation[],
  jobs: IJob[]
): IJob[] => {
  const jobIds: string[] = [];
  for (const jobLocation of jobLocations) {
    jobIds.push(jobLocation.jobId);
  }
  return _.filter(jobs, (job) => _.includes(jobIds, job.id));
};

export const attachJobsToGeocodePins = (
  jobs: IJob[],
  pins: IGeocodePinResponse[]
): IGeocodePin[] => {
  const res: IGeocodePin[] = [];
  for (const pin of pins) {
    const job: IJob = _.find(jobs, (job) => job.id === pin.jobId) as IJob;
    res.push({
      job,
      address: pin.address,
      lat: pin.lat,
      lng: pin.lng,
    });
  }
  return res;
};
