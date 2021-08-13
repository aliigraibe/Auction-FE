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
    case actionType.DELETE_AUCTION:
      return {
        ...state,
        auctions: state.auctions.filter(
          (auction) => auction._id !== action.payload.auctionId
        ),
      };
    case actionType.UPDATE_AUCTION:
      const { updateAuction } = action.payload; //3
      return {
        ...state,
        auctions: state.auctions.map((auction) =>
          auction._id === updateAuction.id ? updateAuction : auction
        ),
      };

    default:
      return state;
  }
};

export default reducer;
