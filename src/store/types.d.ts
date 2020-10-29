import RootState from './reducers';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

type ThunkVoidAction = ThunkAction<void, RootState, unknown, Action<string>>;

type ThunkVoidDispatch = ThunkDispatch<RootState, undefined, ThunkVoidAction>;

interface ApiAction extends Action<string> {
  response?: any;
  error?: string | Array | null | undefined;
  extraData?: any;
}

interface RouteComponent {
  path: string;
  component: React.FC<any>;
}
