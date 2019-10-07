import { createStore, combineReducers, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import loginReducer from './login/login';
import isLoadingReducer from './isLoading/isLoading';
import countReducer from './count/count';
import pingingReducer from './pinging/pinging';
import { pingingEpic } from '../actions/pinging/pinging';
import counterReducer from './counter/counter';
import { incrementIfOddEpic } from '../actions/counter/counter';
import fetchGithubUserReducer from './fetchGithubUser/fetchGithubUser';
import { fetchUserEpic } from '../actions/fetchGithubUser/fetchGithubUser';

const rootReducer = combineReducers({
  loginReducer,
  isLoadingReducer,
  countReducer,
  pingingReducer,
  counterReducer,
  fetchGithubUserReducer,
});

const rootEpic = combineEpics(
  pingingEpic,
  incrementIfOddEpic,
  fetchUserEpic,
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
