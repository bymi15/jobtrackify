import reducer from './reducer';
import * as actions from './actions';
import * as types from './types';
import { IGeocodePin } from '../../models';

export interface IMapState {
  geocodePins: IGeocodePin[] | null;
}

export { actions };

export { types };

export default reducer;
