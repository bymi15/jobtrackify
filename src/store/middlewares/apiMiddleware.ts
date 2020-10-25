import axios from 'axios';
import { Middleware } from 'redux';
import config from '../../config';
import { RootState } from '../ducks';

interface IAxiosRequest {
  headers?: any;
  data?: any;
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
}

const apiMiddleware: Middleware<{}, RootState> = ({ dispatch }) => (next) => (
  action
) => {
  next(action);

  if (action.type !== 'API') return;

  const { name, url, requestData, ignoreErrors, extraData } = action;
  axios.defaults.baseURL = config.API_URL;
  axios.defaults.headers.common['Content-Type'] = 'application/json';

  let req: IAxiosRequest = {
    url,
    method: requestData.method,
  };
  if (requestData.headers) {
    req.headers = requestData.headers;
  }
  if (requestData.data) {
    req.data = requestData.data;
  }

  dispatch({ type: `${name}_REQUEST` });
  axios
    .request(req)
    .then(({ data }) => {
      dispatch({ type: `${name}_SUCCESS`, response: data, extraData });
    })
    .catch((err) => {
      if (!ignoreErrors) {
        const errorMessage = err.response
          ? err.response.data.error
          : 'An unknown error has occurred';
        dispatch({ type: `${name}_FAILURE`, error: errorMessage });
      }
    });
};

export default apiMiddleware;
