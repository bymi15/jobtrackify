import { ApiAction } from '../../../types';
import { ICompanyState } from './index';
import * as types from './types';
import cache from '../../../cache';

const initialState: ICompanyState = {
  company: null,
  companies: null,
};

const reducer = (
  state: ICompanyState = initialState,
  action: ApiAction
): ICompanyState => {
  switch (action.type) {
    case `${types.GET_COMPANY}_SUCCESS`:
      cache.set('company', action.response);
      return {
        ...state,
        company: action.response,
      };
    case `${types.GET_COMPANIES}_SUCCESS`:
      cache.set('companies', action.response);
      return {
        ...state,
        companies: action.response,
      };
    case types.SET_COMPANY:
      return {
        ...state,
        company: action.response,
      };
    case types.SET_COMPANIES:
      return {
        ...state,
        companies: action.response,
      };
    default:
      return state;
  }
};

export default reducer;
