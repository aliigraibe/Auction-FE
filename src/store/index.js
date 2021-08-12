import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import { checkForToken } from "./actions/authActions";
import { fetchCategory } from "./actions/categoryAction";
import rootReducer from "./reducer/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(checkForToken());
store.dispatch(fetchCategory());
export default store;
