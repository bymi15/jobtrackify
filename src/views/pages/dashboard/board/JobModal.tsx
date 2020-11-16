import * as React from 'react';
import {
  ICompany,
  IJob,
  INote,
  INoteInput,
  INoteUpdate,
} from '../../../../store/models';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Grid from '@material-ui/core/Grid';
import CompanyLogo from '../../../../components/CompanyLogo';
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
  WithStyles,
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import EditText, { onSaveProps } from 'react-edit-text';
import TextField from '@material-ui/core/TextField';
import { ThunkVoidAction, ThunkVoidDispatch } from '../../../../store/types';
import { actions } from '../../../../store/ducks/api/job';
import { actions as noteActions } from '../../../../store/ducks/api/note';
import { connect, ConnectedProps } from 'react-redux';
import { IJobUpdate } from '../../../../store/models/IJob';
import { Button } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import { RootState } from '../../../../store/ducks';
import { showToast } from '../../../../utils/showToast';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Paper from '@material-ui/core/Paper';
import Moment from 'react-moment';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <React.Fragment>{children}</React.Fragment>}
    </div>
  );
};

const a11yProps = (index: any) => {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
};

const useStyles = makeStyles((theme) =>
  createStyles({
    dialogPaper: {
      minHeight: '75vh',
      maxHeight: '75vh',
      minWidth: '650px',
      maxWidth: '650px',
      [theme.breakpoints.down('sm')]: {
        minHeight: '80vh',
        maxHeight: '80vh',
        minWidth: '80vw',
        maxWidth: '80vw',
      },
    },
    tabPanel: {
      maxHeight: '45vh',
      padding: '5px',
      paddingLeft: '25px',
      paddingRight: '25px',
      [theme.breakpoints.down('sm')]: {
        maxHeight: '50vh',
      },
    },
    modalContent: {
      paddingBottom: theme.spacing(4),
    },
    label: {
      paddingTop: '6px',
      fontSize: '16px',
      fontWeight: 600,
    },
    editabletext: {
      fontSize: '16px',
      fontWeight: 400,
    },
    textareaWrapper: {
      paddingTop: '10px !important',
    },
    textarea: {
      padding: theme.spacing(1),
      fontWeight: 400,
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
    paddingBottom: {
      paddingBottom: theme.spacing(2),
    },
    marginTop: {
      marginTop: theme.spacing(1),
    },
  })
);

interface Props extends PropsFromRedux {
  open: boolean;
  job: IJob | null;
  onClose: () => void;
}

const JobModal: React.FC<Props> = ({
  open,
  onClose,
  job,
  notes,
  dispatchUpdateJob,
  dispatchGetNotesByJob,
  dispatchCreateNote,
}) => {
  const classes = useStyles();
  const [tabValue, setTabValue] = React.useState(0);
  const [noteTextarea, setNoteTextarea] = React.useState('');

  React.useEffect(() => {
    if (job) {
      dispatchGetNotesByJob(job.id);
    }
  }, [dispatchGetNotesByJob, job]);

  const handleChangeNote = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNoteTextarea(e.target.value);
  };

  const handleSaveNote = () => {
    if (job && noteTextarea.trim() !== '') {
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

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue);
  };

  const handleSave = (data: onSaveProps) => {
    const { name, value } = data;
    if (job) {
      dispatchUpdateJob(job.id, { [name]: value });
    }
  };

  const handleSaveAddress = (data: onSaveProps) => {
    const { value } = data;
    if (job) {
      dispatchUpdateJob(job.id, { location: { address: value } });
    }
  };

  const handleClose = () => {
    setTabValue(0);
    onClose();
  };

  const hasCompanyData = !!job ? typeof job.company !== 'string' : false;
  let companyData: ICompany | null = null;
  if (hasCompanyData) {
    companyData = job && (job.company as ICompany);
  }
  const companyName = job
    ? typeof job.company === 'string'
      ? job.company
      : job.company.name
    : '';

  return (
    job && (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="job-modal"
        classes={{ paper: classes.dialogPaper }}
      >
        <DialogTitle id="job-modal" onClose={handleClose}>
          {' '}
        </DialogTitle>
        <DialogContent className={classes.modalContent} dividers>
          <Grid
            className={classes.paddingBottom}
            container
            spacing={3}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item>
              <CompanyLogo company={job.company} size="xl" />
            </Grid>
            <Grid item>
              <Typography variant="h4" color="textPrimary">
                {companyName}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                {job.title}
              </Typography>
            </Grid>
          </Grid>
          <Tabs
            className={classes.paddingBottom}
            value={tabValue}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Job Info" {...a11yProps(0)} />
            <Tab label="Notes" {...a11yProps(1)} />
            {hasCompanyData && <Tab label="Company" {...a11yProps(2)} />}
          </Tabs>
          <TabPanel value={tabValue} index={0}>
            <Grid container spacing={1}>
              <Grid container spacing={1}>
                <Grid item sm={3}>
                  <Typography className={classes.label}>Company:</Typography>
                </Grid>
                <Grid item sm={9}>
                  <EditText
                    className={classes.editabletext}
                    value={companyName}
                    readonly
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item sm={3}>
                  <Typography className={classes.label}>Job Title:</Typography>
                </Grid>
                <Grid item sm={9}>
                  <EditText
                    className={classes.editabletext}
                    name="title"
                    value={job.title}
                    placeholder="Enter a value"
                    onSave={handleSave}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item sm={3}>
                  <Typography className={classes.label}>Address:</Typography>
                </Grid>
                <Grid item sm={9}>
                  <EditText
                    className={classes.editabletext}
                    name="address"
                    value={job.location && job.location.address}
                    placeholder="Enter a value"
                    onSave={handleSaveAddress}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item sm={3}>
                  <Typography className={classes.label}>
                    Date Applied:
                  </Typography>
                </Grid>
                <Grid item sm={9}>
                  <EditText
                    type="date"
                    className={classes.editabletext}
                    name="dateApplied"
                    value={job.dateApplied}
                    placeholder="Enter a value"
                    onSave={handleSave}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item sm={3}>
                  <Typography className={classes.label}>Post URL:</Typography>
                </Grid>
                <Grid item sm={9}>
                  <EditText
                    className={classes.editabletext}
                    name="postUrl"
                    value={job.postUrl}
                    placeholder="Enter a value"
                    onSave={handleSave}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item sm={3}>
                  <Typography className={classes.label}>
                    Description:
                  </Typography>
                </Grid>
                <Grid item sm={9} className={classes.textareaWrapper}>
                  <TextField
                    InputProps={{ className: classes.textarea }}
                    id="outlined-multiline-static"
                    multiline
                    fullWidth
                    rows={4}
                    value={job.description}
                    placeholder="Enter a value"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <DialogContentText>
              <PerfectScrollbar
                options={{ suppressScrollX: true, scrollYMarginOffset: 5 }}
              >
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
                  <Grid
                    container
                    spacing={1}
                    direction="column"
                    alignItems="flex-end"
                  >
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
              </PerfectScrollbar>
            </DialogContentText>
          </TabPanel>
          {hasCompanyData && !!companyData && (
            <TabPanel value={tabValue} index={2}>
              <DialogContentText>
                <Grid container spacing={1}>
                  <Grid container spacing={1}>
                    <Box display="flex" flexDirection="row" mt={2} mb={2}>
                      <CompanyLogo company={job.company} size="md" />
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        pl={2}
                      >
                        <Typography color="textPrimary" variant="h5">
                          {companyName}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  {companyData.description && (
                    <Grid container spacing={1}>
                      <Grid item sm={12}>
                        <EditText
                          className={classes.editabletext}
                          value={companyData.description}
                          readonly
                        />
                      </Grid>
                    </Grid>
                  )}
                  {companyData.type && (
                    <Grid container spacing={1}>
                      <Grid item sm={4}>
                        <Typography
                          color="textPrimary"
                          className={classes.label}
                        >
                          Type:
                        </Typography>
                      </Grid>
                      <Grid item sm={8}>
                        <EditText
                          className={classes.editabletext}
                          value={companyData.type}
                          readonly
                        />
                      </Grid>
                    </Grid>
                  )}
                  {companyData.website && (
                    <Grid container spacing={1}>
                      <Grid item sm={4}>
                        <Typography
                          color="textPrimary"
                          className={classes.label}
                        >
                          Website:
                        </Typography>
                      </Grid>
                      <Grid item sm={8}>
                        <EditText
                          className={classes.editabletext}
                          value={companyData.website}
                          readonly
                        />
                      </Grid>
                    </Grid>
                  )}
                  {companyData.industry && (
                    <Grid container spacing={1}>
                      <Grid item sm={4}>
                        <Typography
                          color="textPrimary"
                          className={classes.label}
                        >
                          Industry:
                        </Typography>
                      </Grid>
                      <Grid item sm={8}>
                        <EditText
                          className={classes.editabletext}
                          value={companyData.industry}
                          readonly
                        />
                      </Grid>
                    </Grid>
                  )}
                  {companyData.foundedYear && (
                    <Grid container spacing={1}>
                      <Grid item sm={4}>
                        <Typography
                          color="textPrimary"
                          className={classes.label}
                        >
                          Founded:
                        </Typography>
                      </Grid>
                      <Grid item sm={8}>
                        <EditText
                          className={classes.editabletext}
                          value={companyData.foundedYear.toString()}
                          readonly
                        />
                      </Grid>
                    </Grid>
                  )}
                  {companyData.headquarters && (
                    <Grid container spacing={1}>
                      <Grid item sm={4}>
                        <Typography
                          color="textPrimary"
                          className={classes.label}
                        >
                          Headquarters:
                        </Typography>
                      </Grid>
                      <Grid item sm={8}>
                        <EditText
                          className={classes.editabletext}
                          value={companyData.headquarters}
                          readonly
                        />
                      </Grid>
                    </Grid>
                  )}
                  {companyData.country && (
                    <Grid container spacing={1}>
                      <Grid item sm={4}>
                        <Typography
                          color="textPrimary"
                          className={classes.label}
                        >
                          Country:
                        </Typography>
                      </Grid>
                      <Grid item sm={8}>
                        <EditText
                          className={classes.editabletext}
                          value={companyData.country}
                          readonly
                        />
                      </Grid>
                    </Grid>
                  )}
                  {companyData.sizeRange && (
                    <Grid container spacing={1}>
                      <Grid item sm={4}>
                        <Typography
                          color="textPrimary"
                          className={classes.label}
                        >
                          Company size:
                        </Typography>
                      </Grid>
                      <Grid item sm={8}>
                        <EditText
                          className={classes.editabletext}
                          value={companyData.sizeRange + ' employees'}
                          readonly
                        />
                      </Grid>
                    </Grid>
                  )}
                  {companyData.currentEmployeeEstimate && (
                    <Grid container spacing={1}>
                      <Grid item sm={4}>
                        <Typography
                          color="textPrimary"
                          className={classes.label}
                        >
                          Current employees:
                        </Typography>
                      </Grid>
                      <Grid item sm={8}>
                        <EditText
                          className={classes.editabletext}
                          value={
                            companyData.currentEmployeeEstimate +
                            ' employees est.'
                          }
                          readonly
                        />
                      </Grid>
                    </Grid>
                  )}
                  {companyData.totalEmployeeEstimate && (
                    <Grid container spacing={1}>
                      <Grid item sm={4}>
                        <Typography
                          color="textPrimary"
                          className={classes.label}
                        >
                          Total employees:
                        </Typography>
                      </Grid>
                      <Grid item sm={8}>
                        <EditText
                          className={classes.editabletext}
                          value={
                            companyData.totalEmployeeEstimate +
                            ' employees est.'
                          }
                          readonly
                        />
                      </Grid>
                    </Grid>
                  )}
                  {companyData.linkedInUrl && (
                    <Grid container spacing={1}>
                      <Grid item sm={4}>
                        <Typography
                          color="textPrimary"
                          className={classes.label}
                        >
                          LinkedIn Page:
                        </Typography>
                      </Grid>
                      <Grid item sm={8}>
                        <Typography
                          className={classes.label}
                          style={{
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          <Link
                            href={'https://' + companyData.linkedInUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            https://{companyData.linkedInUrl}
                          </Link>
                        </Typography>
                      </Grid>
                    </Grid>
                  )}
                </Grid>
              </DialogContentText>
            </TabPanel>
          )}
        </DialogContent>
      </Dialog>
    )
  );
};

const mapStateToProps = (state: RootState) => ({
  notes: state.note.notes,
});

const mapDispatchToProps = (dispatch: ThunkVoidDispatch) => ({
  dispatchUpdateJob: (id: string, job: IJobUpdate): ThunkVoidAction =>
    dispatch(actions.updateJob(id, job)),
  dispatchGetNotesByJob: (jobId: string): ThunkVoidAction =>
    dispatch(noteActions.getNotesByJob(jobId)),
  dispatchCreateNote: (note: INoteInput): ThunkVoidAction =>
    dispatch(noteActions.createNote(note)),
  dispatchUpdateNote: (id: string, note: INoteUpdate): ThunkVoidAction =>
    dispatch(noteActions.updateNote(id, note)),
  dispatchDeleteNote: (id: string): ThunkVoidAction =>
    dispatch(noteActions.deleteNote(id)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(JobModal);
