import { createStore, combineReducers, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import loginReducer from './login/login';
import isLoadingReducer from './isLoading/isLoading';
import countReducer from './count/count';
import pingingReducer from './pinging/pinging';
import { pingingEpic } from '../actions/pinging/pinging';
import counterReducer from './counter/counter';
import { incrementIfOddEpic } from '../actions/counter/counter';

const rootReducer = combineReducers({
  loginReducer,
  isLoadingReducer,
  countReducer,
  pingingReducer,
  counterReducer,
});

const rootEpic = combineEpics(
  pingingEpic,
  incrementIfOddEpic,
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(
    epicMiddleware,
  ),
);

epicMiddleware.run(rootEpic);

export type storeTypes = ReturnType<typeof rootReducer>;

export default store;
