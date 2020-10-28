import * as React from 'react';
import Routes from './views/routes';
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import 'react-edit-text/dist/index.css';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Routes />
      <ReduxToastr
        timeOut={5000}
        newestOnTop={true}
        position="top-center"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
    </React.Fragment>
  );
};

export default App;
