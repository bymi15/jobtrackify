import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as React from 'react';

export interface ConfirmOptions {
  title?: string;
  description?: string;
  variant?: 'danger' | 'info';
  actionCallback?: (value: boolean) => void;
}

interface Props extends ConfirmOptions {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const ConfirmDialog: React.FC<Props> = ({
  open,
  title,
  description,
  onClose,
  onSubmit,
  variant,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {variant === 'danger' ? (
          <React.Fragment>
            <Button onClick={onClose} color="primary">
              No
            </Button>
            <Button onClick={onSubmit} color="primary" autoFocus>
              Yes
            </Button>
          </React.Fragment>
        ) : (
          <Button onClick={onSubmit} color="primary" autoFocus>
            OK
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
