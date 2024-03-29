import * as React from 'react';
import Popover from '@material-ui/core/Popover';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CompanyLogo from '../../../../components/CompanyLogo';
import { IJob } from '../../../../store/models';

const useStyles = makeStyles((theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(1),
      display: 'inline-block',
    },
    popover: {
      pointerEvents: 'none',
    },
  })
);

interface Props {
  job: IJob;
  lat: number;
  lng: number;
}

const Pin: React.FC<Props> = ({ job, lat, lng }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = () => {
    //TODO: open job modal
    // console.log(job);
  };

  const handleMouseEnter = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const pinId = 'pin' + job.id;
  return (
    <div className="pin">
      <IconButton
        aria-label="pin"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleClose}
      >
        <CompanyLogo company={job.company} size="md" />
      </IconButton>
      <Popover
        className={classes.popover}
        id={pinId}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        disableRestoreFocus
      >
        <Typography className={classes.typography}>
          {typeof job.company === 'string' ? job.company : job.company.name}
        </Typography>
      </Popover>
    </div>
  );
};

export default Pin;
