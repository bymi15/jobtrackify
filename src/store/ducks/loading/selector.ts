import _ from 'lodash';

export const createLoadingSelector = (actions: string[]) => (state: any) => {
  return _(actions).some((action: string) => _.get(state, `loading.${action}`));
};
