import Axios from 'axios';
import { from, Observable } from 'rxjs';
import {
  mergeMap, map, catchError,
} from 'rxjs/operators';
import { ofType, Epic } from 'redux-observable';

export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_FILFILLED = 'FETCH_USER_FILFILLED';

interface FetchUserI {
  type: typeof FETCH_USER;
  payload: {
    username: string;
  };
}

export const fetchUser = (username: string): FetchUserI => ({
  type: FETCH_USER,
  payload: {
    username,
  },
});

interface FetchUserFulfilledI {
  type: typeof FETCH_USER_FILFILLED;
  payload: {
    userInfo: Record<string, string>;
  };
}

export const fetchUserFulfilled = (userInfo: Record<string, string>): FetchUserFulfilledI => ({
  type: FETCH_USER_FILFILLED,
  payload: {
    userInfo,
  },
});

export const fetchUserEpic: Epic<fetchGithubUserActionTypes> = (action$) => action$.pipe(
  ofType(FETCH_USER),
  mergeMap(
    (action): Observable<FetchUserFulfilledI> => from(Axios({
      url: `https://api.github.com/users/${(action as FetchUserI).payload.username}`,
    }))
      .pipe(
        map((response): FetchUserFulfilledI => fetchUserFulfilled(
          response.data ? response.data : { },
        )),
        catchError((error): Observable<never> => Observable.throw(error)),
      ),
  ),
);

export type fetchGithubUserActionTypes = FetchUserI | FetchUserFulfilledI;
