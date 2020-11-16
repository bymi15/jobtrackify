import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { StringChain } from 'lodash';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);

interface Props {
  customHeight?: string;
  hasTopbar?: boolean;
}

const Loader: React.FC<Props> = ({ customHeight, hasTopbar }) => {
  const classes = useStyles();
  let height = 'calc(100vh - 64px - 25px)';
  if (!!customHeight) {
    height = `calc(${customHeight} - 25px)`;
  } else {
    if (hasTopbar) {
      height = 'calc(100vh - 83px - 64px - 25px)';
    }
  }
  return (
    <div className={classes.loader} style={{ height }}>
      <CircularProgress />
    </div>
  );
};

export default Loader;
