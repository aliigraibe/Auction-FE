import { combineReducers } from "redux";
//
import user from "./authReducer";
import categories from "./categoryReducer";
import auctions from "./AuctionReducer";
import wallets from "./walletReducer";
import clientSecret from "./paymentReducer";

const rootReducer = combineReducers({
  user: user,
  categories: categories,
  auctions: auctions,
  wallets: wallets,
  clientSecret: clientSecret,
});
export default rootReducer;
