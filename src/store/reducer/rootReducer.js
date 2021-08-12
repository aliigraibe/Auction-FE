import user from "./authReducer";
import categories from "./categoryReducer";
import auctions from "./AuctionReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: user,
  categories: categories,
  auctions: auctions,
});
export default rootReducer;
