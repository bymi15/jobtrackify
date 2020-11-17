import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { EditText, EditTextarea, onSaveProps } from 'react-edit-text';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { IJob, IJobUpdate } from '../../../store/models';
import { ThunkVoidAction, ThunkVoidDispatch } from '../../../store/types';
import { connect, ConnectedProps } from 'react-redux';
import { actions } from '../../../store/ducks/api/job';

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
    editabletext: {
      fontFamily: 'Roboto',
      fontSize: '16px',
      fontWeight: 400,
    },
    label: {
      paddingTop: '6px',
      fontSize: '16px',
      fontWeight: 600,
    },
    textareaWrapper: {
      paddingTop: '10px !important',
    },
    scrollbar: {
      height: '45vh',
      ...theme.scrollbar,
    },
  })
);

interface Props extends PropsFromRedux {
  job: IJob;
}

const JobInfoTab: React.FC<Props> = ({ job, dispatchUpdateJob }) => {
  const classes = useStyles();
  const companyName = !!job
    ? typeof job.company === 'string'
      ? job.company
      : job.company.name
    : '';

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

  console.log(job.description);

  return (
    <div className={classes.scrollbar}>
      <Grid className={classes.tabPanel} container spacing={1}>
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
            <Typography className={classes.label}>Date Applied:</Typography>
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
            <Typography
              className={classes.label}
              style={{ paddingTop: '12px' }}
            >
              Description:
            </Typography>
          </Grid>
          <Grid item sm={9} className={classes.textareaWrapper}>
            <EditTextarea
              name="description"
              className={classes.editabletext}
              value={job.description}
              placeholder="Enter a value"
              onSave={handleSave}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const mapDispatchToProps = (dispatch: ThunkVoidDispatch) => ({
  dispatchUpdateJob: (id: string, job: IJobUpdate): ThunkVoidAction =>
    dispatch(actions.updateJob(id, job)),
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(JobInfoTab);
