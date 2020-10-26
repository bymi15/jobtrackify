import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect, ConnectedProps } from 'react-redux';
import { ThunkVoidAction, ThunkVoidDispatch } from '../store/types';
import { RootState } from '../store/ducks';
import { actions, types } from '../store/ducks/api/company';
import { createErrorSelector } from '../store/ducks/error';
import { createLoadingSelector } from '../store/ducks/loading';
import { showToast } from '../utils/showToast';
import { ICompany } from '../store/models';
import InputAdornment from '@material-ui/core/InputAdornment';
import BusinessIcon from '@material-ui/icons/Business';
import LetterAvatar from './LetterAvatar';
import Avatar from '@material-ui/core/Avatar';

interface Props extends PropsFromRedux {
  className?: string;
  handleSelect: (company: ICompany | null) => void;
}

const CompanySelect: React.FC<Props> = ({
  className,
  handleSelect,
  companies,
  isLoading,
  error,
  dispatchGetCompanies,
  dispatchClearErrors,
}) => {
  const [selectedCompany, setSelectedCompany] = React.useState<ICompany | null>(
    null
  );
  React.useEffect(() => {
    if (companies === null) {
      dispatchGetCompanies();
    }
  }, [companies, dispatchGetCompanies]);

  if (error) {
    showToast('Error', error, 'danger', dispatchClearErrors);
  }

  return (
    <Autocomplete
      id="company-select"
      onChange={(_event: any, newCompany: ICompany | null) => {
        setSelectedCompany(newCompany);
        handleSelect(newCompany);
      }}
      getOptionSelected={(option, value) => option.id === value.id}
      getOptionLabel={(option) => option.name}
      options={companies || []}
      loading={isLoading}
      renderInput={(params) => (
        <TextField
          {...params}
          className={className}
          label="Company"
          placeholder="Select a company..."
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                {!!selectedCompany ? (
                  !!selectedCompany.logo ? (
                    <Avatar
                      src={selectedCompany.logo}
                      aria-label="company-avatar"
                    />
                  ) : (
                    <LetterAvatar
                      name={selectedCompany.name}
                      aria-label="company-avatar"
                    />
                  )
                ) : (
                  <BusinessIcon />
                )}
              </InputAdornment>
            ),
            endAdornment: (
              <React.Fragment>
                {isLoading ? (
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

const loadingSelector = createLoadingSelector([types.GET_COMPANIES]);
const errorSelector = createErrorSelector([types.GET_COMPANIES]);

const mapStateToProps = (state: RootState) => ({
  companies: state.company.companies,
  isLoading: loadingSelector(state),
  error: errorSelector(state),
});

const mapDispatchToProps = (dispatch: ThunkVoidDispatch) => ({
  dispatchGetCompanies: (): ThunkVoidAction => dispatch(actions.getCompanies()),
  dispatchClearErrors: (): ThunkVoidAction => dispatch(actions.clearErrors()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(CompanySelect);
