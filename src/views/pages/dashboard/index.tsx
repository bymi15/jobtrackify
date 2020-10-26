import * as React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Loader from '../../../components/Loader';
import { RootState } from '../../../store/ducks';
import { actions as dashboardActions } from '../../../store/ducks/dashboard';
import { actions, types } from '../../../store/ducks/api/board';
import { createLoadingSelector } from '../../../store/ducks/loading';
import { createErrorSelector } from '../../../store/ducks/error';
import { ThunkVoidAction, ThunkVoidDispatch } from '../../../store/types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { useCustomState } from '../../../utils/customHooks';
import { showToast } from '../../../utils/showToast';
import Moment from 'react-moment';
import { useInputDialog } from '../../../utils/InputDialogProvider';
import { useConfirmDialog } from '../../../utils/ConfirmDialogProvider';
import { IBoard } from '../../../store/models';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(5),
      flexGrow: 1,
    },
    board: {
      height: '140px',
      padding: theme.spacing(2),
      color: theme.palette.primary.main,
      transition: '0.3s',
      cursor: 'pointer',
      '&:hover': {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4)',
      },
      '& .title': {
        marginTop: theme.spacing(2),
        fontWeight: 'bold',
        fontSize: '16px',
        display: '-webkit-box',
        '-webkit-line-clamp': 2,
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden',
      },
      '& .dateCreated': {
        fontSize: '12px',
        color: '#969696',
        marginBottom: '0',
      },
    },
    boardAdd: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '140px',
      padding: '5% 0',
      textAlign: 'center',
      background: 'rgba(255, 255, 255, 0.1)',
      color: '#858585',
      borderStyle: 'dashed',
      borderColor: '#b3b2b2',
      borderRadius: '5px',
      boxShadow: 'none',
      transition: '0.2s',
      cursor: 'pointer',
      '&:hover': {
        borderColor: '#585858',
        color: '#585858',
      },
    },
    grid: {
      marginTop: theme.spacing(1),
    },
    deleteIcon: {
      float: 'right',
      color: '#796a6c',
      opacity: '0.6',
      transition: '0.3s',
      '&:hover': {
        opacity: '1',
      },
    },
    deleteIconHidden: {
      float: 'right',
      opacity: '0',
    },
  })
);

const Dashboard: React.FC<PropsFromRedux> = ({
  dispatchGetBoardsByUser,
  dispatchCreateBoard,
  dispatchDeleteBoard,
  dispatchClearErrors,
  dispatchSelectBoard,
  boards,
  isLoading,
  error,
}) => {
  const [state, setState] = useCustomState({
    showTrashIcon: {},
  });
  const confirmDialog = useConfirmDialog();
  const inputDialog = useInputDialog();
  const history = useHistory();
  const classes = useStyles();

  React.useEffect(() => {
    dispatchGetBoardsByUser();
  }, [dispatchGetBoardsByUser]);

  React.useEffect(() => {
    if (error) {
      showToast('Error', error, 'danger', dispatchClearErrors);
    }
  }, [dispatchClearErrors, error]);

  const handleMouseEnter = (id: string) => {
    setState({
      showTrashIcon: { [id]: true },
    });
  };

  const handleMouseLeave = () => {
    setState({
      showTrashIcon: {},
    });
  };

  const handleClick = (board: IBoard) => {
    dispatchSelectBoard(board);
    history.push('/dashboard/board');
  };

  const handleDeleteBoard = async (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    id: string
  ) => {
    e.stopPropagation();
    const shouldDelete = await confirmDialog({
      variant: 'danger',
      title: 'Are you sure?',
      description: 'Do you wish to delete the board?',
    });
    if (shouldDelete) {
      dispatchDeleteBoard(id);
    }
  };

  const handleAddNewBoard = async () => {
    const { value, result } = await inputDialog({
      title: 'Add a board',
      inputName: 'Board Title',
    });
    if (result) {
      dispatchCreateBoard(value);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Container className={classes.root}>
      <Typography variant="h5">My Boards</Typography>
      <Grid className={classes.grid} container spacing={3}>
        {boards &&
          boards.length > 0 &&
          boards.map((board) => (
            <Grid key={board.id} item sm={6} md={3}>
              <Paper
                elevation={2}
                className={classes.board}
                onMouseEnter={() => {
                  handleMouseEnter(board.id);
                }}
                onMouseLeave={handleMouseLeave}
                onClick={() => {
                  handleClick(board);
                }}
              >
                <DeleteOutlineIcon
                  className={
                    state.showTrashIcon[board.id]
                      ? classes.deleteIcon
                      : classes.deleteIconHidden
                  }
                  onClick={(e) => {
                    handleDeleteBoard(e, board.id);
                  }}
                />
                <p className="title">{board.title}</p>
                <p className="dateCreated">
                  <Moment format="DD/MM/YYYY">{board.createdAt}</Moment>
                </p>
              </Paper>
            </Grid>
          ))}
        <Grid item sm={6} md={3}>
          <Paper
            onClick={handleAddNewBoard}
            elevation={2}
            className={classes.boardAdd}
          >
            + Add a new board
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
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
  dispatchGetBoardsByUser: (): ThunkVoidAction =>
    dispatch(actions.getBoardsByUser()),
  dispatchCreateBoard: (title: string): ThunkVoidAction =>
    dispatch(actions.createBoard(title)),
  dispatchDeleteBoard: (id: string): ThunkVoidAction =>
    dispatch(actions.deleteBoard(id)),
  dispatchClearErrors: (): ThunkVoidAction => dispatch(actions.clearErrors()),
  dispatchSelectBoard: (board: IBoard): ThunkVoidAction =>
    dispatch(dashboardActions.selectBoard(board)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Dashboard);
