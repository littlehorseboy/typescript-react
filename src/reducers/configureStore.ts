import { createStore, combineReducers } from 'redux';
import countReducer from './count/count';

const rootReducer = combineReducers({
  countReducer,
});

const store = createStore(
  rootReducer,
);

export type storeTypes = ReturnType<typeof rootReducer>;

export default store;
