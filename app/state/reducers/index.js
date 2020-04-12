import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from './history';
import blockchain from './blockchain';
import languageProviderReducer from './language';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    blockchain,
    language: languageProviderReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
