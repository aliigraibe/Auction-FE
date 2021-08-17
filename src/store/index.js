import { compose, createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import rootReducer from "./reducer/rootReducer";

//
import { checkForToken } from "./actions/authActions";
import { fetchCategory } from "./actions/categoryAction";
import { fetchAuction } from "./actions/AuctionAction";
import { fetchWallet } from "./actions/WalletAction";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(checkForToken());
store.dispatch(fetchCategory());
store.dispatch(fetchAuction());
store.dispatch(fetchWallet());

export default store;
