import {
  fetchGithubUserActionTypes, FETCH_USER, FETCH_USER_FILFILLED,
} from '../../actions/fetchGithubUser/fetchGithubUser';

interface UserInfoI {
  userInfo: Record<string, string>;
}

const initState: UserInfoI = {
  userInfo: {},
};

const reducer = (
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

export default reducer;
