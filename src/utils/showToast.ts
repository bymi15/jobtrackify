import { BasicToastrOptions, toastr } from 'react-redux-toastr';

let options: BasicToastrOptions = {
  timeOut: 5000,
  showCloseButton: true,
  progressBar: false,
  transitionIn: 'fadeIn',
  transitionOut: 'fadeOut',
};

type toastTypes = 'info' | 'warning' | 'danger' | 'success';

export const showToast = (
  title: string,
  msg: string,
  type: toastTypes,
  callbackClear?: () => void
): void => {
  const toastrInstance =
    type === 'info'
      ? toastr.info
      : type === 'warning'
      ? toastr.warning
      : type === 'danger'
      ? toastr.error
      : toastr.success;
  if (callbackClear) options.onHideComplete = callbackClear;
  toastrInstance(title, msg, options);
};
