import * as actionType from "../actions/types";

const initialState = {
  favs: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_FAVS:
      return {
        ...state,
        Favs: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
