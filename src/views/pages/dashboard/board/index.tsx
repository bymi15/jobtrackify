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
import { createStyles, makeStyles } from '@material-ui/core/styles';
import JobModal from '../../../shared/JobModal';
import Job from './Job';
import { IJob } from '../../../../store/models';
import { isEqual } from 'lodash';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: theme.spacing(2),
      marginBottom: 0,
    },
    wrapper: {
      display: 'flex',
      flexWrap: 'nowrap',
      paddingBottom: '10px',
      ...theme.scrollbar,
      overFlowY: 'hidden',
      overflowX: 'auto',
    },
    column: {
      width: '370px',
      flex: '0 0 auto',
      marginRight: theme.spacing(2),
    },
  })
);
const Board: React.FC<PropsFromRedux> = ({
  selectedBoard,
  jobs,
  boardColumns,
  loading,
  error,
  dispatchMoveJob,
  dispatchMoveJobUI,
  dispatchClearErrors,
}) => {
  const [jobModal, setJobModal] = React.useState<IJob | null>(null);
  const classes = useStyles();

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

  if (loading) {
    return <Loader hasTopbar />;
  } else if (selectedBoard === null) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className={classes.root}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className={classes.wrapper}>
          <React.Fragment>{memoJobModal}</React.Fragment>
          {boardColumns &&
            boardColumns.length > 0 &&
            boardColumns.map((boardColumn) => (
              <div key={boardColumn.id} className={classes.column}>
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
              </div>
            ))}
        </div>
      </DragDropContext>
    </div>
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
  loading: loadingSelector(state),
  error: errorSelector(state),
});

const mapDispatchToProps = (dispatch: ThunkVoidDispatch) => ({
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
