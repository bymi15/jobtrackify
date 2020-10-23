import { RootState } from '../ducks';

export default function authHeader(state: RootState) {
  const token = state.auth.token;
  if (token) {
    return { authorization: `Token ${token}` };
  } else {
    return null;
  }
}
