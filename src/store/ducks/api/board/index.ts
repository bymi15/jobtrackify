import reducer from './reducer';
import * as actions from './actions';
import * as types from './types';
import { IBoard } from '../../../models';

export interface IBoardState {
  board: IBoard | null;
  boards: IBoard[] | null;
}

export { actions };

export { types };

export default reducer;
