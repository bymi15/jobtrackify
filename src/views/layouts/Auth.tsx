import * as React from 'react';

import Container from '@material-ui/core/Container';

import { Redirect } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store/ducks';

const mapStateToProps = (state: RootState) => ({
  auth: state.auth,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props {
  children: React.ReactNode;
}

const Auth: React.FC<PropsFromRedux & Props> = ({ auth, children }) => {
  if (auth.isAuthenticated) {
    return <Redirect to="/dashboard" />;
  } else {
    return (
      <Container className="auth" maxWidth="md">
        <React.Fragment>{children}</React.Fragment>
      </Container>
    );
  }
};

export default connector(Auth);
