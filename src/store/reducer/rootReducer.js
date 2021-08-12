import { combineReducers } from "redux";

import authReducer from "./authReducer";
import categories from "./categoryReducer";

const rootReducer = combineReducers({
  user: authReducer,
  categories: categories,
});
export default rootReducer;
