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
import { actions as jobActions } from '../../store/ducks/api/job';
import { actions as boardColumnActions } from '../../store/ducks/api/boardColumn';
import { createLoadingSelector } from '../../store/ducks/loading';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
  })
);

interface Props extends PropsFromRedux {
  children: React.ReactNode;
}

const Dashboard: React.FC<Props & RouteComponentProps> = ({
  children,
  auth,
  location,
  error,
  loading,
  selectedBoard,
  boardColumns,
  jobs,
  currentJobsBoardId,
  dispatchGetBoardColumns,
  dispatchGetJobsByBoard,
}) => {
  const classes = useStyles();
  const history = useHistory();

  React.useEffect(() => {
    if (!auth.isAuthenticated) {
      showToast('', 'Please login to proceed', 'warning');
      history.push('/auth/login');
    } else if (auth.user && !auth.user.emailConfirmed) {
      showToast('', 'Please verify your email to proceed', 'warning');
      history.push('/confirmEmail');
    }
  }, [auth.isAuthenticated, auth.token, auth.user, error, history]);

  React.useEffect(() => {
    if (selectedBoard && !loading) {
      if (!jobs || currentJobsBoardId !== selectedBoard.id) {
        dispatchGetJobsByBoard(selectedBoard.id);
      }
    }
  }, [
    currentJobsBoardId,
    dispatchGetJobsByBoard,
    jobs,
    loading,
    selectedBoard,
  ]);

  React.useEffect(() => {
    if (!loading && !boardColumns) {
      dispatchGetBoardColumns();
    }
  }, [boardColumns, dispatchGetBoardColumns, loading]);

  const showTopBar = (): boolean =>
    location.pathname === '/dashboard/board' ||
    location.pathname === '/dashboard/map' ||
    location.pathname === '/dashboard/notes' ||
    location.pathname === '/dashboard/interviews';

  return auth.isAuthenticated ? (
    <div style={{ overflow: 'hidden' }}>
      <CssBaseline />
      <Navbar solid />
      <div className={classes.toolbar} />
      {showTopBar() && <Topbar pathname={location.pathname} />}
      {children}
    </div>
  ) : null;
};

const loadingSelector = createLoadingSelector([types.GET_AUTH_USER]);
const errorSelector = createErrorSelector([types.GET_AUTH_USER]);

const mapStateToProps = (state: RootState) => ({
  selectedBoard: state.dashboard.board,
  boardColumns: state.boardColumn.boardColumns,
  jobs: state.job.jobs,
  currentJobsBoardId: state.job.currentJobsBoardId,
  auth: state.auth,
  error: errorSelector(state),
  loading: loadingSelector(state),
});

const mapDispatchToProps = (dispatch: ThunkVoidDispatch) => ({
  dispatchGetJobsByBoard: (boardId: string): ThunkVoidAction =>
    dispatch(jobActions.getJobsByBoard(boardId)),
  dispatchGetBoardColumns: (): ThunkVoidAction =>
    dispatch(boardColumnActions.getBoardColumns()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default withRouter(connector(Dashboard));
