import reducer from './reducer';
import * as actions from './actions';
import { IBoard } from '../../../models';

export interface IBoardState {
  board: IBoard | null;
  boards: IBoard[] | null;
}

export { actions };

export default reducer;
