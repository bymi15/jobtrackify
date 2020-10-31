import { CssBaseline } from '@material-ui/core';
import * as React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const Info: React.FC = ({ children }) => (
  <React.Fragment>
    <CssBaseline />
    <Navbar solid />
    {children}
    <Footer />
  </React.Fragment>
);

export default Info;
