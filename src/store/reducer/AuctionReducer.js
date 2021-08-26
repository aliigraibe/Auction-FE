import * as actionType from "../actions/types";
const initialState = {
  auctions: null,
  auction: null,
  loading: true,
  refresher: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_AUCTION:
      return {
        ...state,
        auctions: action.payload,
        loading: false,
      };
    case actionType.REFRESHER:
      return {
        ...state,
        auctions: [...state.auctions],
      };
    case actionType.FETCH:
      return {
        ...state,
        auction: action.payload,
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
          auction._id === updateAuction._id ? updateAuction : auction
        ),
      };

    case actionType.BID:
      const { bid } = action.payload;

      return {
        ...state,

        auctions: state.auctions.map((auction) =>
          auction._id === bid._id ? bid : auction
        ),
      };

    case actionType.WINNER:
      const newWinner = action.payload;

      return {
        ...state,

        auctions: state.auctions.map((auction) =>
          auction._id === newWinner._id ? newWinner : auction
        ),
      };
    case actionType.PAY:
      const updatePay = action.payload;
      return {
        ...state,
        auctions: state.auctions.map((auction) =>
          auction._id === updatePay._id ? updatePay : auction
        ),
      };
    default:
      return state;
  }
};

export default reducer;
