import * as React from 'react';
import Container from '@material-ui/core/Container';
import { createStyles, makeStyles } from '@material-ui/core/styles';

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
  })
);

interface Props {}

const Interviews: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md" className={classes.container}>
        <h2>The page is currently under development</h2>
      </Container>
    </div>
  );
};

export default Interviews;
