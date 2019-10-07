import { counterActionTypes, INCREMENT } from '../../actions/counter/counter';

interface CounterI {
  count: number;
}

const initState = {
  count: 0,
};

const reducer = (state = initState, action: counterActionTypes): CounterI => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default reducer;
