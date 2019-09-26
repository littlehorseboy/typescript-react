import { createStore, combineReducers } from 'redux';
import loginReducer from './login/login';
import countReducer from './count/count';

const rootReducer = combineReducers({
  loginReducer,
  countReducer,
});

const store = createStore(
  rootReducer,
);

export type storeTypes = ReturnType<typeof rootReducer>;

export default store;
