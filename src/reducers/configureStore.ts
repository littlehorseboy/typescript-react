import { createStore, combineReducers } from 'redux';
import loginReducer from './login/login';
import isLoadingReducer from './isLoading/isLoading';
import countReducer from './count/count';

const rootReducer = combineReducers({
  loginReducer,
  isLoadingReducer,
  countReducer,
});

const store = createStore(
  rootReducer,
);

export type storeTypes = ReturnType<typeof rootReducer>;

export default store;
