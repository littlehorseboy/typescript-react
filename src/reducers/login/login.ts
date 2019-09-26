import { loginActionTypes, LOGIN, LOGOUT } from '../../actions/login/login';

export interface UserInfoI {
  name: string;
}

export interface LoginInfoI {
  isAuthenticated: boolean;
  userInfo: UserInfoI;
}

const initState: LoginInfoI = {
  isAuthenticated: false,
  userInfo: {
    name: '',
  },
};

const reducer = (state = initState, action: loginActionTypes): LoginInfoI => {
  switch (action.type) {
    case LOGIN:
      return {
        isAuthenticated: true,
        userInfo: {
          name: action.payload.userInfo.name,
        },
      };
    case LOGOUT:
      return initState;
    default:
      return state;
  }
};

export default reducer;
