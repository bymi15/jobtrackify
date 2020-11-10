import * as React from 'react';
import GoogleMapReact from 'google-map-react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import config from '../../../../config';
import { RootState } from '../../../../store/ducks';
import { connect, ConnectedProps } from 'react-redux';
import Pin from './Pin';
import { IJob } from '../../../../store/models';
import filterJobsForMap from '../../../../utils/filterJobsForMap';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 'calc(100vh - 64px - 83px)',
      width: '100%',
    },
  })
);

interface Props extends PropsFromRedux {
  center?: {
    lat: number;
    lng: number;
  };
  zoom?: number;
}

const Map: React.FC<Props> = ({
  center = { lat: 51.5, lng: -0.1277 },
  zoom = 10,
  jobs,
}) => {
  const [filteredJobs, setFilteredJobs] = React.useState<IJob[]>([]);
  React.useEffect(() => {
    if (!!jobs) {
      setFilteredJobs(filterJobsForMap(jobs));
    }
  }, [jobs]);
  const classes = useStyles();

  const getMapOptions = (maps: GoogleMapReact.Maps) => {
    return {
      fullscreenControl: true,
      mapTypeControl: true,
      mapTypeId: maps.MapTypeId.ROADMAP,
      scaleControl: true,
      scrollwheel: true,
      streetViewControl: true,
    };
  };

  return (
    <div className={classes.root}>
      <GoogleMapReact
        options={getMapOptions}
        bootstrapURLKeys={{
          key: config.GOOGLE_API_KEY || '',
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {filteredJobs
          ? filteredJobs.map(
              (job: IJob) =>
                job.location && (
                  <Pin
                    key={job.id}
                    job={job}
                    lat={job.location.lat}
                    lng={job.location.lng}
                  />
                )
            )
          : null}
      </GoogleMapReact>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  jobs: state.job.jobs,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Map);
