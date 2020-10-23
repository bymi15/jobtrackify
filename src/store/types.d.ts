import RootState from './reducers';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

type ThunkVoidAction = ThunkAction<void, RootState, unknown, Action<string>>;

interface ApiAction extends Action<string> {
  response?: any;
  error?: any;
}

interface PayloadAction extends Action<string> {
  payload?: any;
}

interface RouteComponent {
  path: string;
  component: React.FC<any>;
}
