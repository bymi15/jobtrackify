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

  const { name, url, requestData, ignoreErrors } = action;
  axios.defaults.baseURL = config.API_URL;
  axios.defaults.headers.common['Content-Type'] = 'application/json';

  let req: IAxiosRequest = {
    url,
    method: requestData.method,
  };
  if (requestData.headers) {
    req.headers = requestData.headers;
  }
  if (requestData.body) {
    req.data = requestData.body;
  }

  dispatch({ type: `${name}_REQUEST` });
  axios
    .request(req)
    .then(({ data }) => {
      dispatch({ type: `${name}_SUCCESS`, response: data });
    })
    .catch((err) => {
      if (!ignoreErrors) {
        dispatch({ type: `${name}_FAILURE`, error: err.response.data.error });
      }
    });
};

export default apiMiddleware;
