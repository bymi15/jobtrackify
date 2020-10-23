import { Dispatch } from 'redux';
import { ThunkVoidAction } from '../../types';
import * as types from './types';
import { IBoard } from '../../models';

export const setBoard = (board: IBoard): ThunkVoidAction => (
  dispatch: Dispatch
) => {
  dispatch({
    type: types.SET_BOARD,
    payload: board,
  });
};

export const clearBoard = (): ThunkVoidAction => (dispatch: Dispatch) => {
  dispatch({
    type: types.CLEAR_BOARD,
  });
};
