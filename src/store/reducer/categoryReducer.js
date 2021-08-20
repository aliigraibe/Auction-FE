import * as actionType from "../actions/types";
const initialState = {
  categories: null,
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // REVIEW: type should be FETCH_CATEGORIES not FETCH_CATEGORY
    case actionType.FETCH_CATEGORY:
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
