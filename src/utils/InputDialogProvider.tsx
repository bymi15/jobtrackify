import * as React from 'react';
import InputDialog, {
  callbackType,
  InputDialogOptions,
} from '../components/InputDialog';

type InputDialogContextType = {
  openInputDialog: (options: InputDialogOptions) => void;
};
const InputDialogContext = React.createContext<InputDialogContextType | {}>({});

interface IProps {
  children: React.ReactNode;
}

const InputDialogProvider = ({ children }: IProps) => {
  const [inputState, setInputState] = React.useState<InputDialogOptions | null>(
    null
  );
  const [value, setValue] = React.useState<string>('');

  const openInputDialog = (options: InputDialogOptions) => {
    setInputState(options);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValue(e.target.value);
  };

  const handleClose = () => {
    if (inputState && inputState.actionCallback) {
      inputState.actionCallback({ value: '', result: false });
    }
    setInputState(null);
  };

  const handleSubmit = () => {
    if (inputState && inputState.actionCallback) {
      inputState.actionCallback({ value, result: true });
    }
    setInputState(null);
  };

  return (
    <InputDialogContext.Provider value={{ openInputDialog }}>
      <InputDialog
        open={Boolean(inputState)}
        onSubmit={handleSubmit}
        onClose={handleClose}
        onInputChange={handleChange}
        {...inputState}
      />
      {children}
    </InputDialogContext.Provider>
  );
};

const useInputDialog = () => {
  const { openInputDialog } = React.useContext(
    InputDialogContext
  ) as InputDialogContextType;

  const inputDialog = ({ ...options }) =>
    new Promise<callbackType>((res) => {
      openInputDialog({ actionCallback: res, ...options });
    });

  return inputDialog;
};

export { InputDialogProvider, useInputDialog };
