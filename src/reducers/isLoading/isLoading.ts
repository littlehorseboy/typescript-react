import { isLoadingActionTypes, LOADING, LOADED } from '../../actions/isLoading/isLoading';

interface IsLoadingI {
  isLoading: boolean;
}

const initState: IsLoadingI = {
  isLoading: false,
};

const reducer = (state = initState, action: isLoadingActionTypes): IsLoadingI => {
  switch (action.type) {
    case LOADING:
      return {
        isLoading: true,
      };
    case LOADED:
      return {
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
