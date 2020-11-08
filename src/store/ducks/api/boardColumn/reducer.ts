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
    case types.SET_BOARD_COLUMNS_CACHE:
      return {
        ...state,
        boardColumns: action.response,
      };
    default:
      return state;
  }
};

export default reducer;
