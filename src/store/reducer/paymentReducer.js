import * as actionType from "../actions/types";
const initialState = {
  clientSecret: null,
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.PAYMENT_INTENT:
      return {
        ...state,
        clientSecret: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
