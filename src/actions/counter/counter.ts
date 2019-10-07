import { filter, map } from 'rxjs/operators';
import { ofType, Epic } from 'redux-observable';
import { storeTypes } from '../../reducers/configureStore';

export const INCREMENT = 'INCREMENT';
export const INCREMENT_IF_ODD = 'INCREMENT_IF_ODD';

interface IncrementI {
  type: typeof INCREMENT;
}

export const increment = (): IncrementI => ({
  type: INCREMENT,
});

interface IncrementIfOddI {
  type: typeof INCREMENT_IF_ODD;
}

export const incrementIfOdd = (): IncrementIfOddI => ({
  type: INCREMENT_IF_ODD,
});

export const incrementIfOddEpic: Epic<counterActionTypes> = (action$, state$) => action$.pipe(
  ofType(INCREMENT_IF_ODD),
  filter((): boolean => (state$.value as storeTypes).counterReducer.count % 2 === 1),
  map(() => increment()),
);

export type counterActionTypes = IncrementI | IncrementIfOddI;
