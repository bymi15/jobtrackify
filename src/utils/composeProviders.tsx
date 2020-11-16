import * as React from 'react';

const composeProviders = (...Providers: any) => (Child: any) => (props: any) =>
  Providers.reduce((acc: any, cur: any) => {
    const [Provider, providerProps] = Array.isArray(cur)
      ? [cur[0], cur[1]]
      : [cur, {}];
    return <Provider {...providerProps}>{acc}</Provider>;
  }, <Child {...props} />);

export default composeProviders;
