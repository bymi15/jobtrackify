import reducer from './reducer';
import * as actions from './actions';
import * as types from './types';
import { ICompany } from '../../../models';

export interface ICompanyState {
  company: ICompany | null;
  companies: ICompany[] | null;
}

export { actions };

export { types };

export default reducer;
