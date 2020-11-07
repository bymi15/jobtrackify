import * as React from 'react';
import GoogleMapReact from 'google-map-react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import config from '../../../../config';
import { RootState } from '../../../../store/ducks';
import { connect, ConnectedProps } from 'react-redux';
import Pin from './Pin';
import { IGeocodePin } from '../../../../store/models';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: '100vh',
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

const GoogleMap: React.FC<Props> = ({
  center = { lat: 51.5, lng: -0.1277 },
  zoom = 10,
  geocodePins,
}) => {
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
        {geocodePins
          ? geocodePins.map((pin: IGeocodePin) => (
              <Pin key={pin.job.id} {...pin} />
            ))
          : null}
      </GoogleMapReact>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  geocodePins: state.map.geocodePins,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(GoogleMap);
