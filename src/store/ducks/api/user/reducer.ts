import { ApiAction } from '../../../types';
import { IUserState } from './index';
import * as types from './types';
import { clone } from 'lodash';

const initialState: IUserState = {
  user: null,
  users: null,
};

const reducer = (
  state: IUserState = initialState,
  action: ApiAction
): IUserState => {
  switch (action.type) {
    case `${types.GET_USER}_SUCCESS`:
      return {
        ...state,
        user: action.response,
      };
    case `${types.GET_USERS}_SUCCESS`:
      return {
        ...state,
        users: action.response,
      };
    case `${types.DELETE_USER}_SUCCESS`:
      const deletedId = action.extraData.id;
      const users =
        state.users && state.users.filter((user) => user.id !== deletedId);
      let user = state.user;
      if (user && user.id === deletedId) {
        user = null;
      }
      return {
        ...state,
        user,
        users,
      };
    case `${types.UPDATE_USER}_SUCCESS`:
      const updatedId = action.response.id;
      const updatedIndex =
        state.users && state.users.findIndex((user) => user.id === updatedId);
      const updatedUsers = clone(state.users);
      if (!!updatedIndex && !!updatedUsers) {
        updatedUsers[updatedIndex] = action.response;
      }
      return {
        ...state,
        user: action.response,
        users: updatedUsers,
      };
    default:
      return state;
  }
};

export default reducer;
