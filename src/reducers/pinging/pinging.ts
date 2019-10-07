import { pingingActionTypes, PING, PONG } from '../../actions/pinging/pinging';

interface IsPingingI {
  isPinging: boolean;
}

const initState: IsPingingI = {
  isPinging: false,
};

const reducer = (state = initState, action: pingingActionTypes): IsPingingI => {
  switch (action.type) {
    case PING:
      return {
        isPinging: true,
      };
    case PONG:
      return {
        isPinging: false,
      };
    default:
      return state;
  }
};

export default reducer;
