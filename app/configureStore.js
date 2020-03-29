import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import createReducer from './state/reducers';

export default function configureStore(initialState = {}, history) {
  const composeEnhancers = compose;
  const reduxSagaMonitorOptions = {};

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers),
  );

  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {};
  store.injectedSagas = {};

  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./state/reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}
