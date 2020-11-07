import { IJob } from '.';

export interface IGeocodePin {
  job: IJob;
  address: string;
  lat: number;
  lng: number;
}

export interface IGeocodePinResponse {
  jobId: string;
  address: string;
  lat: number;
  lng: number;
}

export interface IJobLocation {
  jobId: string;
  location: string;
}
