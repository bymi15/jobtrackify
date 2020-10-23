import * as React from 'react';
import Footer from '../../components/Footer';

const Landing: React.FC = ({ children }) => (
  <React.Fragment>
    <div>{children}</div>
    <Footer />
  </React.Fragment>
);

export default Landing;
