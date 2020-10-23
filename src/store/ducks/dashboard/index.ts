import reducer from './reducer';
import * as actions from './actions';
import { IBoard } from '../../models';

export interface IDashboardState {
  board: IBoard | null;
}

export { actions };

export default reducer;
