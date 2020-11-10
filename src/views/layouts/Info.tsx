import { createStyles, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const useStyles = makeStyles((theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
  })
);

const Info: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar solid />
      <div className={classes.toolbar} />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Info;
