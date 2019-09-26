import { countActionTypes, SETCOUNT } from '../../actions/count/count';

const reducer = (state = 0, action: countActionTypes): number => {
  switch (action.type) {
    case SETCOUNT:
      return action.payload.n;
    default:
      return state;
  }
};

export default reducer;
