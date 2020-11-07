import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { IJob } from '../../../../store/models';
import { makeStyles } from '@material-ui/core/styles';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Moment from 'react-moment';
import { actions } from '../../../../store/ducks/api/job';
import { ThunkVoidAction, ThunkVoidDispatch } from '../../../../store/types';
import { connect, ConnectedProps } from 'react-redux';
import { useConfirmDialog } from '../../../../utils/ConfirmDialogProvider';
import CompanyLogo from '../../../../components/CompanyLogo';

const useStyles = makeStyles({
  root: {
    cursor: 'grab',
    marginBottom: '5px',
  },
  deleteIcon: {
    opacity: 1,
    transition: '0.3s',
  },
  hiddenDeleteIcon: {
    opacity: 0,
  },
  title: {
    fontSize: '16px',
    fontWeight: 500,
  },
  subTitle: {
    fontSize: '14px',
  },
  cardContent: {
    padding: 0,
  },
  createdAt: {
    float: 'right',
    fontSize: '12px',
    color: '#929292',
    fontWeight: 200,
  },
});

interface Props extends PropsFromRedux {
  job: IJob;
  index: number;
}

const Job: React.FC<Props> = ({ job, index, dispatchDeleteJob }) => {
  const classes = useStyles();
  const [hovering, setHovering] = React.useState(false);
  const confirmDialog = useConfirmDialog();

  const deleteJob = async (e: React.MouseEvent<{}, MouseEvent>, job: IJob) => {
    e.stopPropagation();
    const shouldDelete = await confirmDialog({
      variant: 'danger',
      title: 'Are you sure?',
      description: 'Do you wish to delete the job?',
    });
    if (shouldDelete) {
      dispatchDeleteJob(job.id);
    }
  };

  return (
    <Draggable draggableId={job.id} index={index}>
      {(provided: DraggableProvided) => (
        <Card
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className={classes.root}
          innerRef={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <CardContent>
            <CardHeader
              avatar={<CompanyLogo company={job.company} />}
              action={
                <IconButton
                  className={
                    hovering ? classes.deleteIcon : classes.hiddenDeleteIcon
                  }
                  aria-label="delete"
                  onClick={(e) => {
                    deleteJob(e, job);
                  }}
                >
                  <DeleteOutlineIcon />
                </IconButton>
              }
              title={<span className={classes.title}>{job.company.name}</span>}
              subheader={<span className={classes.subTitle}>{job.title}</span>}
            />
            <CardContent className={classes.cardContent}>
              <span className={classes.createdAt}>
                Added <Moment fromNow>{job.createdAt}</Moment>
              </span>
            </CardContent>
          </CardContent>
        </Card>
      )}
    </Draggable>
  );
};

const mapDispatchToProps = (dispatch: ThunkVoidDispatch) => ({
  dispatchDeleteJob: (id: string): ThunkVoidAction =>
    dispatch(actions.deleteJob(id)),
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Job);
