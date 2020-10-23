import * as React from 'react';
import Loader from '../components/Loader';

export default function AsyncImport(fn: any) {
  const Async: React.FC = (props) => {
    const [Component, setComponent] = React.useState<React.FC>();

    React.useEffect(() => {
      async function importComponent() {
        const { default: Component } = await fn();
        setComponent(Component);
      }
      importComponent();
    }, []);

    return Component ? <Component {...props} /> : <Loader />;
  };

  return Async;
}
