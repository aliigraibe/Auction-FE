import * as actionType from "../actions/types";
const initialState = {
  categories: null,
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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

/**
 * @Octowl:
 *
 * What would change in the rest of your code if this was your reducer instead.
 *
 * How would your selector change?
 * How would you know if the data was loading or not?
 */
const alternate_reducer = (state = null, { type, payload }) => {
  switch (type) {
    case actionType.FETCH_CATEGORY:
      return payload;

    default:
      return state;
  }
};
