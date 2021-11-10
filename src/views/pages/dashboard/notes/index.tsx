import * as React from 'react';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { RootState } from '../../../../store/ducks';
import { createErrorSelector } from '../../../../store/ducks/error';
import { createLoadingSelector } from '../../../../store/ducks/loading';
import { actions, types } from '../../../../store/ducks/api/note';
import { ThunkVoidAction, ThunkVoidDispatch } from '../../../../store/types';
import { connect, ConnectedProps } from 'react-redux';
import Moment from 'react-moment';
import Loader from '../../../../components/Loader';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxHeight: `calc(100vh - ${
        theme.mixins.toolbar.minHeight
      }px - 83px - ${theme.spacing(3)}px)`,
      paddingTop: theme.spacing(4),
    },
    container: {
      height: '90vh',
    },
    table: {},
  })
);

const Notes: React.FC<PropsFromRedux> = ({
  notes,
  jobs,
  loading,
  error,
  selectedBoard,
  dispatchGetNotesByBoard,
}) => {
  const classes = useStyles();

  React.useEffect(() => {
    if (selectedBoard) {
      dispatchGetNotesByBoard(selectedBoard.id);
    }
  }, [dispatchGetNotesByBoard, selectedBoard]);

  // React.useEffect(() => {
  //   if (!!jobs && !!notes) {
  //     for(let note of notes){
  //       const res = jobs.find((j) => j.id === note.jobId);
  //     }
  //   }
  // }, [dispatchGetNotesByBoard, selectedBoard]);

  return loading ? (
    <Loader />
  ) : (
    <div className={classes.root}>
      <Container maxWidth="md" className={classes.container}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Note</TableCell>
                <TableCell align="right">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {notes ? (
                notes.map((note) => (
                  <TableRow key={note.id}>
                    <TableCell component="th" scope="row">
                      {note.body}
                    </TableCell>
                    <TableCell align="right">
                      <Moment format="DD/MM/YYYY">{note.createdAt}</Moment>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell component="th" scope="row">
                    No notes to display
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

const loadingSelector = createLoadingSelector([types.GET_NOTES_BOARD]);
const errorSelector = createErrorSelector([types.GET_NOTES_BOARD]);

const mapStateToProps = (state: RootState) => ({
  jobs: state.job.jobs,
  notes: state.note.notes,
  selectedBoard: state.dashboard.board,
  loading: loadingSelector(state),
  error: errorSelector(state),
});

const mapDispatchToProps = (dispatch: ThunkVoidDispatch) => ({
  dispatchGetNotesByBoard: (boardId: string): ThunkVoidAction =>
    dispatch(actions.getNotesByBoard(boardId)),
  dispatchClearErrors: (): ThunkVoidAction => dispatch(actions.clearErrors()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Notes);
