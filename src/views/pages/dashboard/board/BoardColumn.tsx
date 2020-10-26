import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Droppable, DroppableProvided } from 'react-beautiful-dnd';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IBoardColumn, IJob } from '../../../../store/models';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Job from './Job';

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      fontSize: 16,
    },
    subTitle: {
      fontSize: 14,
      marginBottom: 12,
    },
    marginTop: {
      marginTop: theme.spacing(1),
    },
    column: {
      maxHeight: '70vh',
    },
  })
);

interface Props {
  boardColumn: IBoardColumn;
  jobs: IJob[];
}

const BoardColumn: React.FC<Props> = ({ boardColumn, jobs }) => {
  const classes = useStyles();
  const openJobModal = (job: IJob) => {};
  const openAddJobModal = () => {};

  return (
    <Card>
      <CardContent>
        <Typography className={classes.title} color="textPrimary">
          {boardColumn.title}
        </Typography>
        <Typography className={classes.subTitle} color="textSecondary">
          {jobs && jobs.length} job{jobs.length !== 1 && 's'}
        </Typography>
        <Button
          onClick={openAddJobModal}
          variant="outlined"
          color="primary"
          startIcon={<AddIcon />}
          fullWidth
        >
          ADD JOB
        </Button>
        <Droppable droppableId={boardColumn.id}>
          {(provided: DroppableProvided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={classes.marginTop}
            >
              <PerfectScrollbar>
                <div className={classes.column}>
                  {jobs &&
                    jobs.length > 0 &&
                    jobs.map((job, index) => (
                      <div
                        id={job.id}
                        key={job.id}
                        onClick={() => {
                          openJobModal(job);
                        }}
                      >
                        <Job job={job} index={index} />
                      </div>
                    ))}
                  {provided.placeholder}
                </div>
              </PerfectScrollbar>
            </div>
          )}
        </Droppable>
      </CardContent>
    </Card>
  );
};

export default BoardColumn;
