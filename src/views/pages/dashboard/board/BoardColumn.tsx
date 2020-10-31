import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Droppable, DroppableProvided } from 'react-beautiful-dnd';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IBoardColumn } from '../../../../store/models';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import AddJobDialog from './AddJobDialog';

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
      maxHeight: '65vh',
    },
  })
);

interface Props {
  boardColumn: IBoardColumn;
  jobCount: number;
  children: any;
}

const BoardColumn: React.FC<Props> = ({ boardColumn, jobCount, children }) => {
  const [openAddJob, setOpenAddJob] = React.useState<boolean>(false);
  const classes = useStyles();

  return (
    <React.Fragment>
      <AddJobDialog
        open={openAddJob}
        onClose={() => {
          setOpenAddJob(false);
        }}
        boardColumn={boardColumn}
      />
      <Card>
        <CardContent>
          <Typography className={classes.title} color="textPrimary">
            {boardColumn.title}
          </Typography>
          <Typography className={classes.subTitle} color="textSecondary">
            {jobCount} job{jobCount !== 1 && 's'}
          </Typography>
          <Button
            onClick={() => setOpenAddJob(true)}
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
                    {children}
                    {provided.placeholder}
                  </div>
                </PerfectScrollbar>
              </div>
            )}
          </Droppable>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default BoardColumn;
