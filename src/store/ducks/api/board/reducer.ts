import { ApiAction } from '../../../types';
import { IBoardState } from './index';
import * as types from './types';
import { clone } from 'lodash';
import { PURGE } from 'redux-persist';

const initialState: IBoardState = {
  boards: null,
};

const reducer = (
  state: IBoardState = initialState,
  action: ApiAction
): IBoardState => {
  switch (action.type) {
    case PURGE:
      return initialState;
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
      return {
        ...state,
        boards,
      };
    case `${types.UPDATE_BOARD}_SUCCESS`:
      const updatedId = action.response.id;
      const updatedIndex =
        state.boards &&
        state.boards.findIndex((board) => board.id === updatedId);
      const updatedBoards = clone(state.boards);
      if (!!updatedIndex && !!updatedBoards) {
        updatedBoards[updatedIndex] = action.response;
      }
      return {
        ...state,
        boards: updatedBoards,
      };
    default:
      return state;
  }
};

export default reducer;
