import { Dispatch } from 'redux';
import { ThunkVoidAction } from '../../types';
import * as types from './types';
import { IBoard } from '../../models';
import cache from '../../cache';

export const selectBoard = (board: IBoard): ThunkVoidAction => (
  dispatch: Dispatch
) => {
  dispatch({
    type: types.SELECT_BOARD,
    response: board,
  });
};

export const getSelectedBoardCache = (): ThunkVoidAction => (
  dispatch: Dispatch
) => {
  cache.get(
    'selectedBoard',
    () => () => {},
    (item: unknown) =>
      dispatch({ type: types.GET_SELECTED_BOARD_CACHE, response: item })
  );
};
