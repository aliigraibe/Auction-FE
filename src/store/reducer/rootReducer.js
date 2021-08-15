import user from "./authReducer";
import categories from "./categoryReducer";
import auctions from "./AuctionReducer";
import wallets from "./walletReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: user,
  categories: categories,
  auctions: auctions,
  wallets: wallets,
});
export default rootReducer;
