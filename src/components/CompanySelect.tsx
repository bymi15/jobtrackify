import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../store/ducks';
import { ICompany } from '../store/models';
import InputAdornment from '@material-ui/core/InputAdornment';
import BusinessIcon from '@material-ui/icons/Business';
import CompanyLogo from './CompanyLogo';
import { actions, types } from '../store/ducks/api/company';
import { ThunkVoidAction, ThunkVoidDispatch } from '../store/types';
import { createLoadingSelector } from '../store/ducks/loading';
import CircularProgress from '@material-ui/core/CircularProgress';

interface Props extends PropsFromRedux {
  className?: string;
  onChange: (company: ICompany | string | null) => void;
}

const CompanySelect: React.FC<Props> = ({
  className,
  onChange,
  companies,
  loading,
  dispatchSearchCompanies,
  dispatchClearCompanies,
}) => {
  const [selectedCompany, setSelectedCompany] = React.useState<
    ICompany | string | null
  >(null);

  const applyFilter = (query: string) => {
    if (query.trim() === '') {
      dispatchClearCompanies();
    } else {
      dispatchSearchCompanies(query);
    }
  };

  return (
    <Autocomplete
      id="company-select"
      freeSolo
      onChange={(_event: any, newCompany: ICompany | string) => {
        if (typeof newCompany !== 'string') {
          setSelectedCompany(newCompany);
          onChange(newCompany);
        }
      }}
      onInputChange={(_event: any, value: string) => {
        applyFilter(value);
        setSelectedCompany(value);
        onChange(value);
      }}
      getOptionSelected={(option, value) => option.id === value.id}
      getOptionLabel={(option) => option.name}
      options={companies || []}
      loading={loading}
      disableClearable
      renderOption={(option) => (
        <React.Fragment>
          <CompanyLogo company={option} />
          <span style={{ marginLeft: '5px' }}>{option.name}</span>
          {!!option.industry && (
            <span
              style={{ fontSize: '0.9rem', color: '#666', marginLeft: '5px' }}
            >
              • {option.industry}
            </span>
          )}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          className={className}
          label="Company"
          placeholder="Enter a company name..."
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            type: 'search',
            startAdornment: (
              <InputAdornment position="start">
                {!!selectedCompany && typeof selectedCompany !== 'string' ? (
                  <CompanyLogo company={selectedCompany} />
                ) : (
                  <BusinessIcon />
                )}
              </InputAdornment>
            ),
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
      fullWidth
    />
  );
};

const loadingSelector = createLoadingSelector([types.SEARCH_COMPANIES]);

const mapStateToProps = (state: RootState) => ({
  companies: state.company.companies,
  loading: loadingSelector(state),
});

const mapDispatchToProps = (dispatch: ThunkVoidDispatch) => ({
  dispatchSearchCompanies: (query: string): ThunkVoidAction =>
    dispatch(actions.searchCompanies(query)),
  dispatchClearCompanies: (): ThunkVoidAction =>
    dispatch(actions.clearCompanies()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(CompanySelect);
