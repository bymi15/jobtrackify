import cache from '../../cache';
import { ApiAction } from '../../types';
import { IDashboardState } from './index';
import * as types from './types';

const initialState: IDashboardState = {
  board: null,
};

const reducer = (
  state: IDashboardState = initialState,
  action: ApiAction
): IDashboardState => {
  switch (action.type) {
    case types.SELECT_BOARD:
      cache.set('selectedBoard', action.response);
      return {
        ...state,
        board: action.response,
      };

    case types.GET_SELECTED_BOARD_CACHE:
      return {
        ...state,
        board: action.response,
      };

    default:
      return state;
  }
};

export default reducer;
