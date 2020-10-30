import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import PieChartOutlinedIcon from '@material-ui/icons/PieChartOutlined';
import { connect, ConnectedProps } from 'react-redux';
import { ThunkVoidAction, ThunkVoidDispatch } from '../store/types';
import { actions } from '../store/ducks/dashboard';
import { actions as boardActions, types } from '../store/ducks/api/board';
import { IBoard } from '../store/models';
import { RootState } from '../store/ducks';
import { createErrorSelector } from '../store/ducks/error';
import classNames from 'classnames';
import Divider from '@material-ui/core/Divider';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  topbar: {
    display: 'flex',
    flexGrow: 1,
    background: '#fff',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  dropdown: {
    paddingLeft: theme.spacing(3),
    flex: 1,
  },
  icons: {
    color: '#9d9d9d',
  },
  right: {
    flex: 1,
  },
  icon: {
    transition: 'all .4s ease-out 0s',
    fontSize: '2.8rem',
    padding: '5px',
  },
  iconActive: {
    border: '1px solid #d6d6d6',
    borderRadius: '4px',
    color: '#555',
  },
}));

interface Props extends PropsFromRedux {
  pathname: string;
}

const Topbar: React.FC<Props> = ({
  pathname,
  boards,
  selectedBoard,
  error,
  dispatchGetBoardsByUser,
  dispatchSelectBoard,
}) => {
  React.useEffect(() => {
    if (!boards && !error) {
      dispatchGetBoardsByUser();
    }
  }, [boards, dispatchGetBoardsByUser, error]);

  const classes = useStyles();
  const history = useHistory();

  const handleReturnToBoards = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    e.preventDefault();
    history.push('/dashboard');
  };

  const handleSelectBoard = (
    e: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    e.preventDefault();
    if (e.target.value !== selectedBoard.id) {
      if (boards) {
        const board = boards.find((board) => board.id === e.target.value);
        dispatchSelectBoard(board);
      }
    }
  };

  return (
    <Grid className={classes.topbar}>
      <div className={classes.dropdown}>
        <InputLabel id="board-select">Board:</InputLabel>
        <Select
          style={{ width: 220 }}
          labelId="board-select"
          defaultValue={selectedBoard && selectedBoard.id}
          onChange={handleSelectBoard}
        >
          <ListSubheader>My Boards:</ListSubheader>
          {boards &&
            boards.map((board: IBoard) => (
              <MenuItem value={board.id}>{board.title}</MenuItem>
            ))}
          <Divider />
          <MenuItem
            onClick={handleReturnToBoards}
            style={{
              marginTop: '8px',
              paddingTop: '5px',
            }}
          >
            <ArrowBackIosIcon style={{ fontSize: '14px' }} /> Return to boards
          </MenuItem>
        </Select>
      </div>
      <div className={classes.icons}>
        <Tooltip title="Board" placement="bottom">
          <IconButton aria-label="board" size="small">
            <AppsOutlinedIcon
              className={classNames(
                classes.icon,
                pathname === '/dashboard/board' && classes.iconActive
              )}
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Map" placement="bottom">
          <IconButton aria-label="map" size="small">
            <RoomOutlinedIcon
              className={classNames(
                classes.icon,
                pathname === '/dashboard/map' && classes.iconActive
              )}
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Statistics" placement="bottom">
          <IconButton aria-label="statistics" size="small">
            <PieChartOutlinedIcon
              className={classNames(
                classes.icon,
                pathname === '/dashboard/statistics' && classes.iconActive
              )}
            />
          </IconButton>
        </Tooltip>
      </div>
      <div className={classes.right}></div>
    </Grid>
  );
};

const errorSelector = createErrorSelector([types.GET_BOARDS_USER]);

const mapStateToProps = (state: RootState) => ({
  boards: state.board.boards,
  selectedBoard: state.dashboard.board,
  error: errorSelector(state),
});

const mapDispatchToProps = (dispatch: ThunkVoidDispatch) => ({
  dispatchGetBoardsByUser: (): ThunkVoidAction =>
    dispatch(boardActions.getBoardsByUser()),
  dispatchSelectBoard: (board: IBoard): ThunkVoidAction =>
    dispatch(actions.selectBoard(board)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Topbar);
