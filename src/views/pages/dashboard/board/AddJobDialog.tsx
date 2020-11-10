import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import BoardColumnSelect from '../../../../components/BoardColumnSelect';
import CompanySelect from '../../../../components/CompanySelect';
import { RootState } from '../../../../store/ducks';
import { actions } from '../../../../store/ducks/api/job';
import { IBoardColumn, ICompany, IJobInput } from '../../../../store/models';
import { ThunkVoidAction, ThunkVoidDispatch } from '../../../../store/types';
import {
  handleInputChange,
  useCustomState,
} from '../../../../utils/customHooks';

const useStyles = makeStyles((theme) =>
  createStyles({
    marginTop: {
      marginTop: theme.spacing(3),
    },
  })
);

interface Props extends PropsFromRedux {
  open: boolean;
  boardColumn: IBoardColumn;
  onClose: () => void;
}

const initialState: IJobInput = {
  board: '',
  title: '',
  boardColumn: '',
};
const AddJobDialog: React.FC<Props> = ({
  open,
  boardColumn,
  onClose,
  selectedBoard,
  dispatchCreateJob,
}) => {
  const classes = useStyles();
  const [state, setState] = useCustomState(initialState);
  React.useEffect(() => {
    if (open && !!selectedBoard && !!boardColumn) {
      setState({ board: selectedBoard.id, boardColumn: boardColumn.id });
    }
  }, [boardColumn, open, selectedBoard, setState]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatchCreateJob(state as IJobInput);
    setState(initialState);
    onClose();
  };

  const handleSelectCompany = (val: ICompany | string | null) => {
    if (typeof val === 'string') {
      setState({
        company: undefined,
        companyCustom: val,
      });
    } else {
      setState({
        company: (val && val.id) || '',
        companyCustom: undefined,
      });
    }
  };

  const handleSelectBoardColumn = (boardColumn: IBoardColumn | null) => {
    setState({
      boardColumn: (boardColumn && boardColumn.id) || '',
    });
  };

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add Job</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="title"
          label="Job Title"
          type="text"
          onChange={(e) => {
            handleInputChange(e, setState);
          }}
          fullWidth
        />
        <CompanySelect
          className={classes.marginTop}
          onChange={handleSelectCompany}
        />
        <BoardColumnSelect
          className={classes.marginTop}
          handleSelect={handleSelectBoardColumn}
          defaultValue={boardColumn}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="default">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state: RootState) => ({
  selectedBoard: state.dashboard.board,
});

const mapDispatchToProps = (dispatch: ThunkVoidDispatch) => ({
  dispatchCreateJob: (job: IJobInput): ThunkVoidAction =>
    dispatch(actions.createJob(job)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(AddJobDialog);
