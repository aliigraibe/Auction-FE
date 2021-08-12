import * as actionType from "../actions/types";
const initialState = {
  auctions: null,
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_AUCTION:
      return {
        ...state,
        auctions: action.payload,
        loading: false,
      };
    case actionType.ADD_AUCTION:
      const { newAuction } = action.payload;

      return {
        ...state,
        auctions: [...state.auctions, newAuction],
      };
    default:
      return state;
  }
};

export default reducer;
