import _ from 'lodash';

export const createErrorSelector = (actions: string[]) => (state: any) => {
  return (
    _(actions)
      .map((action: string) => _.get(state, `error.${action}`))
      .compact()
      .first() || ''
  );
};
