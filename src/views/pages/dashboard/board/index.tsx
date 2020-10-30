import * as React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../../store/ducks';
import { ThunkVoidAction, ThunkVoidDispatch } from '../../../../store/types';
import {
  actions as boardColumnActions,
  types as boardColumnTypes,
} from '../../../../store/ducks/api/boardColumn';
import {
  actions as jobActions,
  types as jobTypes,
} from '../../../../store/ducks/api/job';
import { createLoadingSelector } from '../../../../store/ducks/loading';
import { createErrorSelector } from '../../../../store/ducks/error';
import Loader from '../../../../components/Loader';
import { Redirect } from 'react-router-dom';
import BoardColumn from './BoardColumn';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import JobModal from './JobModal';
import Job from './Job';
import { IJob } from '../../../../store/models';
import { isEqual } from 'lodash';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(3),
    },
  })
);
const Board: React.FC<PropsFromRedux> = ({
  selectedBoard,
  jobs,
  boardColumns,
  isLoading,
  error,
  dispatchGetBoardColumns,
  dispatchGetJobsByBoard,
  dispatchMoveJob,
  dispatchMoveJobUI,
  dispatchClearErrors,
}) => {
  const [jobModal, setJobModal] = React.useState<IJob | null>(null);
  const classes = useStyles();
  React.useEffect(() => {
    //TODO: cache jobs by board
    if (selectedBoard) {
      dispatchGetBoardColumns();
      dispatchGetJobsByBoard(selectedBoard.id);
    }
  }, [dispatchGetBoardColumns, dispatchGetJobsByBoard, selectedBoard]);

  const handleDragEnd = (res: DropResult) => {
    const { destination, source, draggableId } = res;
    if (destination && !isEqual(source, destination)) {
      const boardColumn = destination.droppableId;
      const offset = destination.droppableId === source.droppableId ? 0 : -1;
      const prevJobId =
        destination.index > 0
          ? jobs[boardColumn][destination.index + offset].id
          : undefined;
      dispatchMoveJobUI(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index
      );
      dispatchMoveJob(draggableId, boardColumn, prevJobId);
    }
  };

  const memoJobModal = React.useMemo(
    () => (
      <JobModal
        open={Boolean(jobModal)}
        job={jobModal}
        onClose={() => {
          setJobModal(null);
        }}
      />
    ),
    [jobModal]
  );

  if (isLoading) {
    return <Loader />;
  } else if (selectedBoard === null) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <React.Fragment>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Container className={classes.root} maxWidth="xl">
          <React.Fragment>{memoJobModal}</React.Fragment>
          <Grid container spacing={2}>
            {boardColumns &&
              boardColumns.length > 0 &&
              boardColumns.map((boardColumn) => (
                <Grid key={boardColumn.id} item sm={6} md={3}>
                  <BoardColumn
                    boardColumn={boardColumn}
                    jobCount={
                      jobs && jobs[boardColumn.id]
                        ? jobs[boardColumn.id].length
                        : 0
                    }
                  >
                    {jobs &&
                      jobs[boardColumn.id] &&
                      jobs[boardColumn.id].map((job: IJob, index: number) => (
                        <div
                          id={job.id}
                          key={job.id}
                          onClick={() => {
                            setJobModal(job);
                          }}
                        >
                          <Job job={job} index={index} />
                        </div>
                      ))}
                  </BoardColumn>
                </Grid>
              ))}
          </Grid>
        </Container>
      </DragDropContext>
    </React.Fragment>
  );
};

const loadingSelector = createLoadingSelector([
  boardColumnTypes.GET_BOARD_COLUMNS,
  jobTypes.GET_JOBS_BOARD,
]);
const errorSelector = createErrorSelector([
  boardColumnTypes.GET_BOARD_COLUMNS,
  jobTypes.GET_JOBS_BOARD,
]);

const mapStateToProps = (state: RootState) => ({
  selectedBoard: state.dashboard.board,
  jobs: state.job.groupedJobs,
  boardColumns: state.boardColumn.boardColumns,
  isLoading: loadingSelector(state),
  error: errorSelector(state),
});

const mapDispatchToProps = (dispatch: ThunkVoidDispatch) => ({
  dispatchGetJobsByBoard: (boardId: string): ThunkVoidAction =>
    dispatch(jobActions.getJobsByBoard(boardId)),
  dispatchGetBoardColumns: (): ThunkVoidAction =>
    dispatch(boardColumnActions.getBoardColumns()),
  dispatchMoveJob: (
    id: string,
    boardColumn: string,
    prevJobId?: string
  ): ThunkVoidAction =>
    dispatch(jobActions.moveJob(id, boardColumn, prevJobId)),
  dispatchMoveJobUI: (
    oldColumn: string,
    newColumn: string,
    oldIndex: number,
    newIndex: number
  ): ThunkVoidAction =>
    dispatch(jobActions.moveJobUI(oldColumn, newColumn, oldIndex, newIndex)),
  dispatchClearErrors: (): ThunkVoidAction =>
    dispatch(boardColumnActions.clearErrors()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Board);
