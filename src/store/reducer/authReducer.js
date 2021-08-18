import * as actionType from "../actions/types";

const initialState = {
  user: null,
  users: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case actionType.FETCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case actionType.ADD_FAVOURITE:
      const { newFavourite } = action.payload;

      return {
        ...state,

        users: state.users.map((user) =>
          user._id === newFavourite._id ? newFavourite : user
        ),
      };

    case actionType.DELETE_FAVOURITE:
      const { favourite } = action.payload;

      return {
        ...state,

        users: state.users.map((user) =>
          user._id === favourite._id ? favourite : user
        ),
      };

    default:
      return state;
  }
};

export default reducer;
