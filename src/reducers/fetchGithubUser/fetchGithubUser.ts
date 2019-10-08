import {
  fetchGithubUserActionTypes, FETCH_USER, FETCH_USER_FILFILLED, FETCH_USER_CANCELLED,
} from '../../actions/fetchGithubUser/fetchGithubUser';

interface UserInfoI {
  userInfo: Record<string, string>;
}

const initState: UserInfoI = {
  userInfo: {},
};

export const fetchGithubUserReducer = (
  state = initState, action: fetchGithubUserActionTypes,
): UserInfoI => {
  switch (action.type) {
    case FETCH_USER:
      return {
        userInfo: {},
      };
    case FETCH_USER_FILFILLED:
      return {
        userInfo: { ...action.payload.userInfo },
      };
    default:
      return state;
  }
};

export const isFetchingGithubUserReducer = (
  state = false, action: fetchGithubUserActionTypes,
): boolean => {
  switch (action.type) {
    case FETCH_USER:
      return true;
    case FETCH_USER_FILFILLED:
    case FETCH_USER_CANCELLED:
      return false;
    default:
      return state;
  }
};
