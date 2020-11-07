import * as React from 'react';
import { withRouter, RouteComponentProps, useHistory } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import Topbar from '../../components/Topbar';
import Navbar from '../../components/Navbar';
import { types } from '../../store/ducks/api/auth';
import { RootState } from '../../store/ducks';
import { CssBaseline } from '@material-ui/core';
import { showToast } from '../../utils/showToast';
import { createErrorSelector } from '../../store/ducks/error';
import { ThunkVoidAction, ThunkVoidDispatch } from '../../store/types';
import { actions } from '../../store/ducks/dashboard';
import { actions as jobActions } from '../../store/ducks/api/job';
import { actions as boardColumnActions } from '../../store/ducks/api/boardColumn';

interface Props extends PropsFromRedux {
  children: React.ReactNode;
}

const Dashboard: React.FC<Props & RouteComponentProps> = ({
  children,
  auth,
  location,
  error,
  selectedBoard,
  boardColumns,
  jobs,
  dispatchGetSelectedBoardCache,
  dispatchGetBoardColumns,
  dispatchGetJobsByBoard,
}) => {
  const history = useHistory();

  React.useEffect(() => {
    if (
      (!auth.isAuthenticated && !auth.token) ||
      (!auth.isAuthenticated && !!error)
    ) {
      showToast('', 'Please login to proceed', 'warning');
      history.push('/auth/login');
    }
  }, [auth.isAuthenticated, auth.token, error, history]);

  React.useEffect(() => {
    if (selectedBoard) {
      if (!boardColumns) {
        dispatchGetBoardColumns();
      }
      if (!jobs) {
        dispatchGetJobsByBoard(selectedBoard.id);
      }
    } else {
      dispatchGetSelectedBoardCache();
    }
  }, [
    boardColumns,
    dispatchGetBoardColumns,
    dispatchGetJobsByBoard,
    dispatchGetSelectedBoardCache,
    jobs,
    selectedBoard,
  ]);

  const showTopBar = (): boolean =>
    location.pathname === '/dashboard/board' ||
    location.pathname === '/dashboard/map' ||
    location.pathname === '/dashboard/notes' ||
    location.pathname === '/dashboard/interviews';

  return !!auth.isAuthenticated && !!auth.token ? (
    <div style={{ overflow: 'hidden' }}>
      <CssBaseline />
      <Navbar solid />
      {showTopBar() && <Topbar pathname={location.pathname} />}
      {children}
    </div>
  ) : null;
};

const errorSelector = createErrorSelector([types.GET_AUTH_USER]);

const mapStateToProps = (state: RootState) => ({
  selectedBoard: state.dashboard.board,
  boardColumns: state.boardColumn.boardColumns,
  jobs: state.job.jobs,
  auth: state.auth,
  error: errorSelector(state),
});

const mapDispatchToProps = (dispatch: ThunkVoidDispatch) => ({
  dispatchGetSelectedBoardCache: (): ThunkVoidAction =>
    dispatch(actions.getSelectedBoardCache()),
  dispatchGetJobsByBoard: (boardId: string): ThunkVoidAction =>
    dispatch(jobActions.getJobsByBoard(boardId)),
  dispatchGetBoardColumns: (): ThunkVoidAction =>
    dispatch(boardColumnActions.getBoardColumns()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default withRouter(connector(Dashboard));
