import { ApiAction } from '../../../types';
import { INoteState } from './index';
import * as types from './types';
import { clone } from 'lodash';
import { PURGE } from 'redux-persist';

const initialState: INoteState = {
  notes: null,
};

const reducer = (
  state: INoteState = initialState,
  action: ApiAction
): INoteState => {
  switch (action.type) {
    case PURGE:
      return initialState;
    case `${types.CREATE_NOTE}_SUCCESS`:
      return state.notes
        ? {
            ...state,
            notes: [action.response, ...state.notes],
          }
        : {
            ...state,
            notes: [action.response],
          };
    case `${types.GET_NOTES}_SUCCESS`:
    case `${types.GET_NOTES_BOARD}_SUCCESS`:
    case `${types.GET_NOTES_JOB}_SUCCESS`:
      return {
        ...state,
        notes: action.response,
      };
    case `${types.DELETE_NOTE}_SUCCESS`:
      const deletedId = action.extraData.id;
      const notes =
        state.notes && state.notes.filter((note) => note.id !== deletedId);
      return {
        ...state,
        notes,
      };
    case `${types.UPDATE_NOTE}_SUCCESS`:
      const updatedId = action.response.id;
      const updatedIndex =
        state.notes && state.notes.findIndex((note) => note.id === updatedId);
      const updatedNotes = clone(state.notes);
      if (!!updatedIndex && !!updatedNotes) {
        updatedNotes[updatedIndex] = action.response;
      }
      return {
        ...state,
        notes: updatedNotes,
      };
    default:
      return state;
  }
};

export default reducer;
