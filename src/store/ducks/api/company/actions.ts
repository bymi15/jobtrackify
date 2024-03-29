import { Dispatch } from 'redux';
import { RootState } from '../..';
import authHeader from '../../../utils/authHeader';
import { ThunkVoidAction } from '../../../types';
import * as types from './types';

const baseUrl = '/api/companies';

export const getCompany = (id: string): ThunkVoidAction => async (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  dispatch({
    type: 'API',
    name: types.GET_COMPANY,
    url: `${baseUrl}/${id}`,
    requestData: {
      method: 'GET',
      headers: authHeader(getState()),
    },
  });
};

export const searchCompanies = (query: string): ThunkVoidAction => async (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  dispatch({
    type: 'API',
    name: types.SEARCH_COMPANIES,
    url: `${baseUrl}/search/${query}`,
    requestData: {
      method: 'GET',
      headers: authHeader(getState()),
    },
  });
};

export const clearCompanies = (): ThunkVoidAction => (dispatch: Dispatch) => {
  dispatch({
    type: types.CLEAR_COMPANIES,
  });
};

export const clearErrors = (): ThunkVoidAction => (dispatch: Dispatch) => {
  dispatch({
    type: `${types.GET_COMPANY}_CLEARERR`,
  });
  dispatch({
    type: `${types.SEARCH_COMPANIES}_CLEARERR`,
  });
};
