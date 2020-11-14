import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../store/ducks';
import { ICompany } from '../store/models';
import InputAdornment from '@material-ui/core/InputAdornment';
import BusinessIcon from '@material-ui/icons/Business';
import CompanyLogo from './CompanyLogo';
import filterCompanies from '../utils/filterCompanies';

interface Props extends PropsFromRedux {
  className?: string;
  onChange: (company: ICompany | string | null) => void;
}

const CompanySelect: React.FC<Props> = ({ className, onChange, companies }) => {
  const [selectedCompany, setSelectedCompany] = React.useState<
    ICompany | string | null
  >(null);
  const [filteredCompanies, setFilteredCompanies] = React.useState<ICompany[]>(
    []
  );

  const applyFilter = (query: string) => {
    const res = filterCompanies(query, companies || [], 5, 'start');
    setFilteredCompanies(res);
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
      options={filteredCompanies}
      disableClearable
      renderOption={(option) => (
        <React.Fragment>
          <CompanyLogo company={option} />
          <span style={{ marginLeft: '5px' }}>{option.name}</span>
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
          }}
        />
      )}
      fullWidth
    />
  );
};

const mapStateToProps = (state: RootState) => ({
  companies: state.company.companies,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(CompanySelect);
