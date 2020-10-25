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
    case `${types.CREATE_BOARD}_SUCCESS`:
      return state.boards
        ? {
            ...state,
            boards: [action.response, ...state.boards],
          }
        : {
            ...state,
            boards: [action.response],
          };
    case `${types.GET_BOARD}_SUCCESS`:
      return {
        ...state,
        board: action.response,
      };
    case `${types.GET_BOARDS}_SUCCESS`:
    case `${types.GET_BOARDS_USER}_SUCCESS`:
      return {
        ...state,
        boards: action.response,
      };
    case `${types.DELETE_BOARD}_SUCCESS`:
      const deletedId = action.extraData.id;
      const boards =
        state.boards && state.boards.filter((board) => board.id !== deletedId);
      let board = state.board;
      if (board && board.id === deletedId) {
        board = null;
      }
      return {
        ...state,
        board,
        boards,
      };
    default:
      return state;
  }
};

export default reducer;
