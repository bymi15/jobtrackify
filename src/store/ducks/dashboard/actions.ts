import { Dispatch } from 'redux';
import { ThunkVoidAction } from '../../types';
import * as types from './types';
import { IBoard } from '../../models';

export const selectBoard = (board: IBoard): ThunkVoidAction => (
  dispatch: Dispatch
) => {
  dispatch({
    type: types.SELECT_BOARD,
    response: board,
  });
};
