import { UserInfoI } from '../../reducers/login/login';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

interface LoginI {
  type: typeof LOGIN;
  payload: {
    userInfo: UserInfoI;
  };
}

export const login = (userInfo: UserInfoI): LoginI => ({
  type: LOGIN,
  payload: {
    userInfo,
  },
});

interface LogoutI {
  type: typeof LOGOUT;
}

export const logout = (): LogoutI => ({
  type: LOGOUT,
});

export type loginActionTypes = LoginI | LogoutI;
