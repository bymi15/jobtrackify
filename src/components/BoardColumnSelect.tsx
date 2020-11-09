import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect, ConnectedProps } from 'react-redux';
import { ThunkVoidAction, ThunkVoidDispatch } from '../store/types';
import { RootState } from '../store/ducks';
import { actions, types } from '../store/ducks/api/boardColumn';
import { createErrorSelector } from '../store/ducks/error';
import { createLoadingSelector } from '../store/ducks/loading';
import { showToast } from '../utils/showToast';
import { IBoardColumn } from '../store/models';

interface Props extends PropsFromRedux {
  className?: string;
  handleSelect: (boardColumn: IBoardColumn | null) => void;
  defaultValue?: IBoardColumn;
}

const BoardColumnSelect: React.FC<Props> = ({
  className,
  handleSelect,
  defaultValue,
  boardColumns,
  loading,
  error,
  dispatchGetBoardColumns,
  dispatchClearErrors,
}) => {
  React.useEffect(() => {
    if (boardColumns === null) {
      dispatchGetBoardColumns();
    }
  }, [boardColumns, dispatchGetBoardColumns]);

  if (error) {
    showToast('Error', error, 'danger', dispatchClearErrors);
  }

  return (
    <Autocomplete
      id="boardcolumn-select"
      onChange={(_event: any, newBoardColumn: IBoardColumn | null) => {
        handleSelect(newBoardColumn);
      }}
      defaultValue={defaultValue}
      getOptionSelected={(option, value) => option.id === value.id}
      getOptionLabel={(option) => option.title}
      options={boardColumns || []}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          className={className}
          label="Board Column"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
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

const loadingSelector = createLoadingSelector([types.GET_BOARD_COLUMNS]);
const errorSelector = createErrorSelector([types.GET_BOARD_COLUMNS]);

const mapStateToProps = (state: RootState) => ({
  boardColumns: state.boardColumn.boardColumns,
  loading: loadingSelector(state),
  error: errorSelector(state),
});

const mapDispatchToProps = (dispatch: ThunkVoidDispatch) => ({
  dispatchGetBoardColumns: (): ThunkVoidAction =>
    dispatch(actions.getBoardColumns()),
  dispatchClearErrors: (): ThunkVoidAction => dispatch(actions.clearErrors()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(BoardColumnSelect);
