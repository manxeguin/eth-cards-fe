import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from './history';
import appReducer from './global';
import languageProviderReducer from './language';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: appReducer,
    language: languageProviderReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
