import * as actionType from "../actions/types";
const initialState = {
  wallets: null,
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_WALLET:
      return {
        ...state,
        wallets: action.payload,
        loading: false,
      };
    case actionType.ADD_WALLET:
      const { newWallet } = action.payload;
      console.log(newWallet);
      return {
        ...state,
        wallets: state.wallets.map((wallet) =>
          wallet._id === newWallet._id
            ? {
                ...wallet,
                balance: newWallet.balance,
              }
            : wallet
        ),
      };

    default:
      return state;
  }
};

export default reducer;
