import { Dispatch } from 'redux';
import { RootState } from '../..';
import authHeader from '../../../utils/authHeader';
import { ThunkVoidAction } from '../../../types';
import * as types from './types';
import cache from '../../../cache';

const baseUrl = '/api/companies';

export const getCompany = (id: string): ThunkVoidAction => async (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  cache.get(
    'company',
    () =>
      dispatch({
        type: 'API',
        name: types.GET_COMPANY,
        url: `${baseUrl}/${id}`,
        requestData: {
          method: 'GET',
          headers: authHeader(getState()),
        },
      }),
    (item: unknown) => dispatch({ type: types.SET_COMPANY, response: item })
  );
};

export const getCompanies = (): ThunkVoidAction => async (
  dispatch: Dispatch,
  getState: () => RootState
) => {
  cache.get(
    'companies',
    () =>
      dispatch({
        type: 'API',
        name: types.GET_COMPANIES,
        url: `${baseUrl}/`,
        requestData: {
          method: 'GET',
          headers: authHeader(getState()),
        },
      }),
    (item: unknown) => dispatch({ type: types.SET_COMPANIES, response: item })
  );
};

export const clearErrors = (): ThunkVoidAction => (dispatch: Dispatch) => {
  dispatch({
    type: `${types.GET_COMPANY}_CLEARERR`,
  });
  dispatch({
    type: `${types.GET_COMPANIES}_CLEARERR`,
  });
};
