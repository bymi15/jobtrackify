import { Dispatch } from 'redux';
import { RootState } from '../..';
import authHeader from '../../../utils/authHeader';
import { ThunkVoidAction } from '../../../types';
import * as types from './types';
import cache from '../../../cache';

const baseUrl = '/api/boardColumns';

export const getBoardColumns = (): ThunkVoidAction => (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  cache.get(
    'boardColumns',
    () =>
      dispatch({
        type: 'API',
        name: types.GET_BOARD_COLUMNS,
        url: `${baseUrl}/`,
        requestData: {
          method: 'GET',
          headers: authHeader(getState()),
        },
      }),
    (item: unknown) =>
      dispatch({ type: types.SET_BOARD_COLUMNS_CACHE, response: item })
  );
};

export const clearErrors = (): ThunkVoidAction => (dispatch: Dispatch) => {
  dispatch({
    type: `${types.GET_BOARD_COLUMNS}_CLEARERR`,
  });
};
