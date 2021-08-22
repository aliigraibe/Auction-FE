import * as actionType from "../actions/types";
const initialState = {
  categories: null,
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
