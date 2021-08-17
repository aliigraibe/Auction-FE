import { combineReducers } from "redux";
//
import user from "./authReducer";
import categories from "./categoryReducer";
import auctions from "./AuctionReducer";
import wallets from "./walletReducer";
import favs from "./FavReducers";

const rootReducer = combineReducers({
  user: user,
  categories: categories,
  auctions: auctions,
  wallets: wallets,
  favs: favs,
});
export default rootReducer;
