import * as React from 'react';
import ConfirmDialog, { ConfirmOptions } from '../components/ConfirmDialog';

type ConfirmDialogContextType = {
  openConfirmDialog: (options: ConfirmOptions) => void;
};
const ConfirmDialogContext = React.createContext<ConfirmDialogContextType | {}>(
  {}
);

interface IProps {
  children: React.ReactNode;
}

const ConfirmDialogProvider = ({ children }: IProps) => {
  const [confirmState, setConfirmState] = React.useState<ConfirmOptions | null>(
    null
  );

  const openConfirmDialog = (options: ConfirmOptions) => {
    setConfirmState(options);
  };

  const handleClose = () => {
    if (confirmState && confirmState.actionCallback) {
      confirmState.actionCallback(false);
    }
    setConfirmState(null);
  };

  const handleSubmit = () => {
    if (confirmState && confirmState.actionCallback) {
      confirmState.actionCallback(true);
    }
    setConfirmState(null);
  };

  return (
    <ConfirmDialogContext.Provider value={{ openConfirmDialog }}>
      <ConfirmDialog
        open={Boolean(confirmState)}
        onSubmit={handleSubmit}
        onClose={handleClose}
        {...confirmState}
      />
      {children}
    </ConfirmDialogContext.Provider>
  );
};

const useConfirmDialog = () => {
  const { openConfirmDialog } = React.useContext(
    ConfirmDialogContext
  ) as ConfirmDialogContextType;

  const confirm = ({ ...options }) =>
    new Promise((res) => {
      openConfirmDialog({ actionCallback: res, ...options });
    });

  return confirm;
};

export { ConfirmDialogProvider, useConfirmDialog };
