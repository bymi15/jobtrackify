import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';

export type callbackType = {
  value: string;
  result: boolean;
};

export interface InputDialogOptions {
  title?: string;
  inputName?: string;
  actionCallback?: ({ value, result }: callbackType) => void;
}

interface Props extends InputDialogOptions {
  open: boolean;
  onInputChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  onClose: () => void;
  onSubmit: () => void;
}

const InputDialog: React.FC<Props> = ({
  open,
  title,
  inputName,
  onClose,
  onSubmit,
  onInputChange,
}) => {
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id={inputName}
          label={inputName}
          type="text"
          onChange={onInputChange}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="default">
          Cancel
        </Button>
        <Button onClick={onSubmit} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InputDialog;
