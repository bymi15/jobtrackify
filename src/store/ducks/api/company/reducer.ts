import { ApiAction } from '../../../types';
import { ICompanyState } from './index';
import * as types from './types';

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
      return {
        ...state,
        company: action.response,
      };
    case `${types.GET_COMPANIES}_SUCCESS`:
      return {
        ...state,
        companies: action.response,
      };
    case types.CLEAR_COMPANIES:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
