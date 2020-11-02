import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, {
  AutocompleteRenderGroupParams,
} from '@material-ui/lab/Autocomplete';
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
import CompanyLogo from './CompanyLogo';
import { VariableSizeList, ListChildComponentProps } from 'react-window';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ListSubheader from '@material-ui/core/ListSubheader';

const LISTBOX_PADDING = 8; // px

const renderRow = (props: ListChildComponentProps) => {
  const { data, index, style } = props;
  return React.cloneElement(data[index], {
    style: {
      ...style,
      top: (style.top as number) + LISTBOX_PADDING,
    },
  });
};

const OuterElementContext = React.createContext({});

const OuterElementType = React.forwardRef<HTMLDivElement>((props, ref) => {
  const outerProps = React.useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

function useResetCache(data: any) {
  const ref = React.useRef<VariableSizeList>(null);
  React.useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [data]);
  return ref;
}

// Adapter for react-window
const ListboxComponent = React.forwardRef<HTMLDivElement>(
  function ListboxComponent(props, ref) {
    const { children, ...other } = props;
    const itemData = React.Children.toArray(children);
    const theme = useTheme();
    const smUp = useMediaQuery(theme.breakpoints.up('sm'), { noSsr: true });
    const itemCount = itemData.length;
    const itemSize = smUp ? 36 : 48;

    const getChildSize = (child: React.ReactNode) => {
      if (React.isValidElement(child) && child.type === ListSubheader) {
        return 48;
      }

      return itemSize;
    };

    const getHeight = () => {
      if (itemCount > 8) {
        return 8 * itemSize;
      }
      return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
    };

    const gridRef = useResetCache(itemCount);

    return (
      <div ref={ref}>
        <OuterElementContext.Provider value={other}>
          <VariableSizeList
            itemData={itemData}
            height={getHeight() + 2 * LISTBOX_PADDING}
            width="100%"
            ref={gridRef}
            outerElementType={OuterElementType}
            innerElementType="ul"
            itemSize={(index) => getChildSize(itemData[index])}
            overscanCount={5}
            itemCount={itemCount}
          >
            {renderRow}
          </VariableSizeList>
        </OuterElementContext.Provider>
      </div>
    );
  }
);

const renderGroup = (params: AutocompleteRenderGroupParams) => [
  <ListSubheader key={params.key} component="div">
    {params.group}
  </ListSubheader>,
  params.children,
];

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
      disableListWrap
      ListboxComponent={
        ListboxComponent as React.ComponentType<
          React.HTMLAttributes<HTMLElement>
        >
      }
      renderGroup={renderGroup}
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
                  <CompanyLogo company={selectedCompany} />
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
