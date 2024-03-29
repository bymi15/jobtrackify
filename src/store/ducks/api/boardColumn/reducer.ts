import { ApiAction } from '../../../types';
import { IBoardColumnState } from './index';
import * as types from './types';

const initialState: IBoardColumnState = {
  boardColumns: null,
};

const reducer = (
  state: IBoardColumnState = initialState,
  action: ApiAction
): IBoardColumnState => {
  switch (action.type) {
    case `${types.GET_BOARD_COLUMNS}_SUCCESS`:
      return {
        ...state,
        boardColumns: action.response,
      };
    case types.CLEAR_BOARD_COLUMNS:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
