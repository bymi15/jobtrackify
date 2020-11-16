import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { IJob, INote, INoteInput, INoteUpdate } from '../../../store/models';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { showToast } from '../../../utils/showToast';
import Paper from '@material-ui/core/Paper';
import Moment from 'react-moment';
import { ThunkVoidAction, ThunkVoidDispatch } from '../../../store/types';
import { connect, ConnectedProps } from 'react-redux';
import { actions } from '../../../store/ducks/api/note';

const useStyles = makeStyles((theme) =>
  createStyles({
    tabPanel: {
      maxHeight: '45vh',
      padding: '5px',
      paddingLeft: '25px',
      paddingRight: '25px',
      [theme.breakpoints.down('sm')]: {
        maxHeight: '50vh',
      },
    },
    note: {
      padding: theme.spacing(2),
      '& div:nth-child(1)': {
        fontSize: '14px',
      },
      '& div:nth-child(2)': {
        textAlign: 'right',
        fontSize: '12px',
        color: '#929292',
        marginTop: theme.spacing(2),
      },
    },
    paddingTop: {
      paddingTop: theme.spacing(2),
    },
    marginTop: {
      marginTop: theme.spacing(1),
    },
    scrollbar: {
      height: '45vh',
      ...theme.scrollbar,
    },
  })
);

interface Props extends PropsFromRedux {
  job: IJob;
  notes: INote[] | null;
}

const NotesTab: React.FC<Props> = ({ job, notes, dispatchCreateNote }) => {
  const classes = useStyles();
  const [noteTextarea, setNoteTextarea] = React.useState('');

  const handleChangeNote = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNoteTextarea(e.target.value);
  };

  const handleSaveNote = () => {
    if (noteTextarea.trim() !== '') {
      dispatchCreateNote({
        body: noteTextarea,
        boardId: job.board.id,
        jobId: job.id,
      });
      setNoteTextarea('');
      showToast('Success!', 'Note has been added.', 'success');
    } else {
      showToast('Please try again', 'Note is empty.', 'warning');
    }
  };

  return (
    <div className={classes.scrollbar}>
      <Grid className={classes.tabPanel} container spacing={1}>
        <Grid container spacing={1}>
          <Grid item sm={12} className={classes.marginTop}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Enter a note"
              multiline
              rows={4}
              onChange={handleChangeNote}
              value={noteTextarea}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} direction="column" alignItems="flex-end">
          <Grid item sm={12} className={classes.marginTop}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveNote}
            >
              Save Note
            </Button>
          </Grid>
        </Grid>
        <Grid className={classes.paddingTop} container spacing={1}>
          {notes &&
            notes.length > 0 &&
            notes.map((note: INote) => (
              <Grid item sm={12}>
                <Paper className={classes.note} elevation={2}>
                  <div>{note.body}</div>
                  <div>
                    <Moment fromNow>{note.createdAt}</Moment>
                  </div>
                </Paper>
              </Grid>
            ))}
        </Grid>
      </Grid>
    </div>
  );
};

const mapDispatchToProps = (dispatch: ThunkVoidDispatch) => ({
  dispatchCreateNote: (note: INoteInput): ThunkVoidAction =>
    dispatch(actions.createNote(note)),
  dispatchUpdateNote: (id: string, note: INoteUpdate): ThunkVoidAction =>
    dispatch(actions.updateNote(id, note)),
  dispatchDeleteNote: (id: string): ThunkVoidAction =>
    dispatch(actions.deleteNote(id)),
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(NotesTab);
