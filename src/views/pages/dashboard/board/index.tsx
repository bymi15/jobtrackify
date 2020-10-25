import * as React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../../store/ducks';
import { ThunkVoidAction, ThunkVoidDispatch } from '../../../../store/types';

interface Props {}

const Board: React.FC<Props> = () => {
  return null;
};

const loadingSelector = createLoadingSelector([
  types.GET_BOARDS_USER,
  types.CREATE_BOARD,
]);
const errorSelector = createErrorSelector([
  types.GET_BOARDS_USER,
  types.CREATE_BOARD,
  types.DELETE_BOARD,
]);

const mapStateToProps = (state: RootState) => ({
  selectedBoard: state.dashboard.board,
  boards: state.board.boards,
  isLoading: loadingSelector(state),
  error: errorSelector(state),
});

const mapDispatchToProps = (dispatch: ThunkVoidDispatch) => ({
  dispatchClearErrors: (): ThunkVoidAction => dispatch(actions.clearErrors()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Board);
