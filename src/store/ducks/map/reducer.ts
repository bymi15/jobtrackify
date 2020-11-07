import { IGeocodePinResponse } from '../../models';
import { ApiAction } from '../../types';
import { IMapState } from './index';
import * as types from './types';
import { attachJobsToGeocodePins } from './utils';

const initialState: IMapState = {
  geocodePins: null,
};

const reducer = (
  state: IMapState = initialState,
  action: ApiAction
): IMapState => {
  switch (action.type) {
    case `${types.GET_GEOCODE_PINS}_SUCCESS`:
      return {
        ...state,
        geocodePins: attachJobsToGeocodePins(
          action.extraData.jobs,
          action.response as IGeocodePinResponse[]
        ),
      };
    default:
      return state;
  }
};

export default reducer;
