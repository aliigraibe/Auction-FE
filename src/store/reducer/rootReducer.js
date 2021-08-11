import authReducer from "./authReducer";
import categories from "./categoryReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: authReducer,
  categories: categories,
});
export default rootReducer;
