import { Dispatch } from 'redux';
import { RootState } from '..';
import { IJobLocation } from '../../models';
import { ThunkVoidAction } from '../../types';
import authHeader from '../../utils/authHeader';
import * as types from './types';
import { getJobsFromJobLocations } from './utils';

export const getGeocodePins = (
  jobLocations: IJobLocation[]
): ThunkVoidAction => (dispatch: Dispatch, getState: () => RootState) => {
  dispatch({
    type: 'API',
    name: types.GET_GEOCODE_PINS,
    url: '/api/geocode',
    requestData: {
      method: 'POST',
      data: { jobLocations },
      headers: authHeader(getState()),
    },
    extraData: {
      jobs: getJobsFromJobLocations(jobLocations, getState().job.jobs || []),
    },
  });
};

export const clearErrors = (): ThunkVoidAction => (dispatch: Dispatch) => {
  dispatch({
    type: `${types.GET_GEOCODE_PINS}_CLEARERR`,
  });
};
