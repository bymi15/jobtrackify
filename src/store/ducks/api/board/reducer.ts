import { ApiAction } from '../../../types';
import { IBoardState } from './index';
import * as types from './types';

const initialState: IBoardState = {
  board: null,
  boards: null,
};

const reducer = (
  state: IBoardState = initialState,
  action: ApiAction
): IBoardState => {
  switch (action.type) {
    case `${types.GET_BOARD}_SUCCESS`:
      return {
        ...state,
        board: action.response,
      };
    case `${types.GET_BOARDS}_SUCCESS`:
      return {
        ...state,
        boards: action.response,
      };

    default:
      return state;
  }
};

export default reducer;
