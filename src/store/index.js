import { compose, createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import rootReducer from "./reducer/rootReducer";
import { checkForToken } from "./actions/authActions";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(checkForToken());
export default store;
