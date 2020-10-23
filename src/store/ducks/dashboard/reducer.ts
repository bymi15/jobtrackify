import { PayloadAction } from '../../types';
import { IDashboardState } from './index';
import * as types from './types';

const initialState: IDashboardState = {
  board: null,
};

const reducer = (
  state: IDashboardState = initialState,
  action: PayloadAction
): IDashboardState => {
  switch (action.type) {
    case types.SET_BOARD:
      return {
        ...state,
        board: action.payload,
      };

    case types.CLEAR_BOARD:
      return {
        ...state,
        board: null,
      };

    default:
      return state;
  }
};

export default reducer;
