import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { ICompany, IJob } from '../../../../store/models';
import { makeStyles } from '@material-ui/core/styles';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Moment from 'react-moment';
import LetterAvatar from '../../../../components/LetterAvatar';

const useStyles = makeStyles({
  root: {
    cursor: 'grab',
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

interface Props {
  job: IJob;
  index: number;
}

const Job: React.FC<Props> = ({ job, index }) => {
  const classes = useStyles();
  const [hovering, setHovering] = React.useState(false);

  const deleteJob = (e: React.MouseEvent<{}, MouseEvent>, job: IJob) => {};

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
              avatar={
                (job.company as ICompany).logo ? (
                  <Avatar
                    alt="companylogo"
                    src={(job.company as ICompany).logo}
                  />
                ) : (
                  <LetterAvatar
                    name={(job.company as ICompany).name}
                    aria-label="company"
                  />
                )
              }
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
              title={
                <span className={classes.title}>
                  {(job.company as ICompany).name}
                </span>
              }
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

export default Job;
