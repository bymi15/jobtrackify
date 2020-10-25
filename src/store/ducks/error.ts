import { ApiAction } from '../types';

export default function error(state = {}, action: ApiAction) {
  const { type, error } = action;
  let errorMessage: string = error;
  if (Array.isArray(error)) {
    errorMessage = error[0] as string;
  }
  const matches = /(.*)_(REQUEST|FAILURE|CLEARERR)/.exec(type);
  if (!matches) return state;

  const [, requestName, requestState] = matches;
  return {
    ...state,
    [requestName]: requestState === 'FAILURE' ? errorMessage : '',
  };
}
