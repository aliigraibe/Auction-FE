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
        favs: action.payload,
        loading: false,
      };
    case actionType.ADD_FAVOURITE:
      const { newFavourite } = action.payload;

      return {
        ...state,
        favs: [...state.favs, newFavourite],
      };
    case actionType.DELETE_FAVOURITE:
      return {
        ...state,
        favs: state.favs.filter((fav) => fav._id !== action.payload.favId),
      };

    default:
      return state;
  }
};

export default reducer;
