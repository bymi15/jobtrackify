import { createStyles, makeStyles } from '@material-ui/core/styles';
import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { connect, ConnectedProps } from 'react-redux';
import { ThunkVoidAction, ThunkVoidDispatch } from '../../../store/types';
import { actions, types } from '../../../store/ducks/api/auth';
import { actions as boardColumnActions } from '../../../store/ducks/api/boardColumn';
import { actions as companyActions } from '../../../store/ducks/api/company';
import { createErrorSelector } from '../../../store/ducks/error';
import { RootState } from '../../../store/ducks';
import { showToast } from '../../../utils/showToast';
import { useConfirmDialog } from '../../../utils/ConfirmDialogProvider';
import Divider from '@material-ui/core/Divider';
import { persistor } from '../../../store';

const useStyles = makeStyles((theme) =>
  createStyles({
    heading: {
      fontWeight: 600,
    },
    divider: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
    },
    marginTop: {
      marginTop: theme.spacing(2),
    },
  })
);

const Settings: React.FC<PropsFromRedux> = ({
  dispatchClearErrors,
  dispatchClearCompanies,
  dispatchClearBoardColumns,
  dispatchDeleteAccount,
  error,
}) => {
  const confirmDialog = useConfirmDialog();
  const classes = useStyles();

  React.useEffect(() => {
    if (error) {
      showToast('Error!', error, 'danger', dispatchClearErrors);
    }
  }, [dispatchClearErrors, error]);

  const handleClearCache = async () => {
    const shouldClear = await confirmDialog({
      variant: 'danger',
      title: 'Warning: you will need to re-login',
      description: 'Do you wish to clear the cache?',
    });
    if (shouldClear) {
      dispatchClearCompanies();
      dispatchClearBoardColumns();
      await persistor.purge();
      showToast('', 'The cache has been cleared', 'success');
    }
  };

  const handleDeleteAccount = async () => {
    const shouldDelete = await confirmDialog({
      variant: 'danger',
      title: 'Are you sure?',
      description: 'Do you wish to permanently delete your account?',
    });
    if (shouldDelete) {
      dispatchDeleteAccount();
      await persistor.purge();
    }
  };

  return (
    <React.Fragment>
      <h2 className={classes.heading}>Clear Cache:</h2>
      <Typography variant="body2" component="p">
        The cache stores various information on your browser.
        <br />
        Clearing the cache will require you to login again.
      </Typography>
      <Grid container className={classes.marginTop} justify="flex-start">
        <Button
          variant="contained"
          size="medium"
          color="primary"
          onClick={handleClearCache}
        >
          Clear Cache
        </Button>
      </Grid>
      <Divider className={classes.divider} />
      <h2 className={classes.heading}>Delete your account:</h2>
      <Typography variant="body2" component="p">
        WARNING! This action is permanent and cannot be undone.
      </Typography>
      <Grid container className={classes.marginTop} justify="flex-start">
        <Button
          variant="contained"
          size="medium"
          color="secondary"
          onClick={handleDeleteAccount}
        >
          Delete Account
        </Button>
      </Grid>
    </React.Fragment>
  );
};

const errorSelector = createErrorSelector([types.DELETE_ACCOUNT]);

const mapStateToProps = (state: RootState) => ({
  error: errorSelector(state),
});

const mapDispatchToProps = (dispatch: ThunkVoidDispatch) => ({
  dispatchDeleteAccount: (): ThunkVoidAction =>
    dispatch(actions.deleteAccount()),
  dispatchClearBoardColumns: (): ThunkVoidAction =>
    dispatch(boardColumnActions.clearBoardColumns()),
  dispatchClearCompanies: (): ThunkVoidAction =>
    dispatch(companyActions.clearCompanies()),
  dispatchClearErrors: (): ThunkVoidAction => dispatch(actions.clearErrors()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Settings);
