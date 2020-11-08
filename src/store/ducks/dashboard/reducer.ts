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
      return {
        ...state,
        board: action.response,
      };

    default:
      return state;
  }
};

export default reducer;
