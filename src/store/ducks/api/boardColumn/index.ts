import reducer from './reducer';
import * as actions from './actions';
import * as types from './types';
import { IBoardColumn } from '../../../models';

export interface IBoardColumnState {
  boardColumns: IBoardColumn[] | null;
}

export { actions };

export { types };

export default reducer;
