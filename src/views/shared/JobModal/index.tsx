import * as React from 'react';
import { ICompany, IJob } from '../../../store/models';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Grid from '@material-ui/core/Grid';
import CompanyLogo from '../../../components/CompanyLogo';
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
import CompanyTab from './CompanyTab';
import JobInfoTab from './JobInfoTab';
import NotesTab from './NotesTab';
import { createLoadingSelector } from '../../../store/ducks/loading';
import { actions, types } from '../../../store/ducks/api/note';
import { RootState } from '../../../store/ducks';
import { ThunkVoidAction, ThunkVoidDispatch } from '../../../store/types';
import { connect, ConnectedProps } from 'react-redux';
import Loader from '../../../components/Loader';

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
    modalContent: {
      paddingBottom: theme.spacing(4),
    },
    paddingBottom: {
      paddingBottom: theme.spacing(2),
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
  loading,
  notes,
  dispatchGetNotesByJob,
}) => {
  const classes = useStyles();
  const [tabValue, setTabValue] = React.useState(0);

  React.useEffect(() => {
    if (job) {
      dispatchGetNotesByJob(job.id);
    }
  }, [dispatchGetNotesByJob, job]);

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue);
  };

  const handleClose = () => {
    setTabValue(0);
    onClose();
  };

  const hasCompanyData = !!job ? typeof job.company !== 'string' : false;
  let company: ICompany | null = null;
  if (hasCompanyData) {
    company = job && (job.company as ICompany);
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
            <JobInfoTab job={job} />
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <DialogContentText>
              {loading ? (
                <Loader customHeight="40vh" />
              ) : (
                <NotesTab notes={notes} job={job} />
              )}
            </DialogContentText>
          </TabPanel>
          {hasCompanyData && !!company && (
            <TabPanel value={tabValue} index={2}>
              <DialogContentText>
                <CompanyTab company={company} />
              </DialogContentText>
            </TabPanel>
          )}
        </DialogContent>
      </Dialog>
    )
  );
};

const loadingSelector = createLoadingSelector([types.GET_NOTES_JOB]);
const mapStateToProps = (state: RootState) => ({
  notes: state.note.notes,
  loading: loadingSelector(state),
});

const mapDispatchToProps = (dispatch: ThunkVoidDispatch) => ({
  dispatchGetNotesByJob: (jobId: string): ThunkVoidAction =>
    dispatch(actions.getNotesByJob(jobId)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(JobModal);
