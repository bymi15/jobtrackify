import * as React from 'react';
import { IJob } from '../../../../store/models';
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
import { connect, ConnectedProps } from 'react-redux';
import { IJobUpdate } from '../../../../store/models/IJob';

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
    root: {
      marginBottom: theme.spacing(2),
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
  dispatchUpdateJob,
}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleSave = (data: onSaveProps) => {
    const { name, value } = data;
    if (job) {
      dispatchUpdateJob(job.id, { [name]: value });
    }
  };

  return (
    job && (
      <Dialog open={open} onClose={onClose} aria-labelledby="job-modal">
        <DialogTitle id="job-modal" onClose={onClose}>
          {job.company.name}
        </DialogTitle>
        <DialogContent className={classes.modalContent} dividers>
          <Grid
            className={classes.root}
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
                {job.company.name}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                {job.title}
              </Typography>
            </Grid>
          </Grid>
          <Tabs
            className={classes.root}
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Info" {...a11yProps(0)} />
            <Tab label="Notes" {...a11yProps(1)} />
            <Tab label="Interviews" {...a11yProps(2)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Grid container spacing={1}>
              <Grid container spacing={1}>
                <Grid item sm={3}>
                  <Typography className={classes.label}>Company:</Typography>
                </Grid>
                <Grid item sm={9}>
                  <EditText
                    className={classes.editabletext}
                    value={job.company.name}
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
                  <Typography className={classes.label}>Location:</Typography>
                </Grid>
                <Grid item sm={9}>
                  <EditText
                    className={classes.editabletext}
                    name="location"
                    value={job.location}
                    placeholder="Enter a value"
                    onSave={handleSave}
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
          <TabPanel value={value} index={1}>
            <DialogContentText>
              Notes section under development
            </DialogContentText>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <DialogContentText>
              Interviews section under development
            </DialogContentText>
          </TabPanel>
        </DialogContent>
      </Dialog>
    )
  );
};

const mapDispatchToProps = (dispatch: ThunkVoidDispatch) => ({
  dispatchUpdateJob: (id: string, job: IJobUpdate): ThunkVoidAction =>
    dispatch(actions.updateJob(id, job)),
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(JobModal);
