import { ChangeEvent, useReducer } from 'react';

export const useCustomState = (defaultState: any): any => {
  const reducer = (state: any, newState: any) => ({ ...state, ...newState });
  return useReducer(reducer, defaultState);
};

export const handleInputChange = (
  e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  setState: any
) => {
  const { name, value } = e.target;
  setState({ [name]: value });
};
