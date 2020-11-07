import * as React from 'react';
import { RootState } from '../../../../store/ducks';
import { connect, ConnectedProps } from 'react-redux';
import { ThunkVoidAction, ThunkVoidDispatch } from '../../../../store/types';
import { actions } from '../../../../store/ducks/map';
import GoogleMap from './GoogleMap';
import { createErrorSelector } from '../../../../store/ducks/error';
import { createLoadingSelector } from '../../../../store/ducks/loading';
import { types } from '../../../../store/ducks/map';
import Loader from '../../../../components/Loader';
import { showToast } from '../../../../utils/showToast';
import { IJobLocation } from '../../../../store/models';

const Map: React.FC<PropsFromRedux> = ({
  dispatchGetGeocodePins,
  loading,
  error,
  geocodePins,
  jobs,
}) => {
  React.useEffect(() => {
    if (!error && !!jobs && jobs.length > 0) {
      const jobsWithLocations = [];
      for (let i = 0; i < jobs.length; i++) {
        if (!!jobs[i].location) {
          jobsWithLocations.push({
            jobId: jobs[i].id,
            location: jobs[i].location || '',
          });
        }
      }
      if (
        jobsWithLocations.length > 0 &&
        (!geocodePins || geocodePins.length === 0)
      ) {
        dispatchGetGeocodePins(jobsWithLocations);
      }
    }
  }, [dispatchGetGeocodePins, error, geocodePins, jobs]);
  if (loading) {
    return <Loader />;
  } else if (error) {
    showToast('Error!', error, 'danger');
  }
  return (
    <div>
      <GoogleMap />
    </div>
  );
};

const loadingSelector = createLoadingSelector([types.GET_GEOCODE_PINS]);
const errorSelector = createErrorSelector([types.GET_GEOCODE_PINS]);

const mapStateToProps = (state: RootState) => ({
  loading: loadingSelector(state),
  error: errorSelector(state),
  geocodePins: state.map.geocodePins,
  jobs: state.job.jobs,
});

const mapDispatchToProps = (dispatch: ThunkVoidDispatch) => ({
  dispatchGetGeocodePins: (jobLocations: IJobLocation[]): ThunkVoidAction =>
    dispatch(actions.getGeocodePins(jobLocations)),
  dispatchClearErrors: (): ThunkVoidAction => dispatch(actions.clearErrors()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Map);
