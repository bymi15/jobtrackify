import reducer from './reducer';
import * as actions from './actions';
import * as types from './types';
import { INote } from '../../../models';

export interface INoteState {
  notes: INote[] | null;
}

export { actions };

export { types };

export default reducer;
