import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';

export type callbackType = {
  value: string;
  hasResult: boolean;
};

export interface InputDialogOptions {
  title?: string;
  inputName?: string;
  defaultValue?: string;
  okText?: string;
  actionCallback?: ({ value, hasResult }: callbackType) => void;
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
  defaultValue,
  okText,
  onClose,
  onSubmit,
  onInputChange,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<any>) =>
    e.key === 'Enter' && onSubmit();

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
          defaultValue={defaultValue}
          type="text"
          onKeyDown={handleKeyDown}
          onChange={onInputChange}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="default">
          Cancel
        </Button>
        <Button onClick={onSubmit} color="primary">
          {okText || 'OK'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InputDialog;
