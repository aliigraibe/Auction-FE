import { Switch, Route } from "react-router";
import Home from "./Home";

import Signup from "../Auth/Signup";
import Signin from "../Auth/Signin";
import CategoryList from "../Category/CategoryList";
import AuctionList from "../Auction/AuctionList";
import AddAuction from "../Auction/AddAuction";
import CategoryDetails from "../Category/CategoryDetails";
import AuctionDetails from "../Auction/AuctionDetails";
import { useSelector } from "react-redux";
import UpdateAuction from "../Auction/UpdateAuction";
import Combine from "../Auction/combine";
import AddWallet from "../Wallet/AddWallet";
import FavList from "../Fav/FavList";
import Loading from "../Loading/Loading";
import Cart from "../Cart/Cart";
import Paid from "../Cart/Paid";
import Checkout from "../Payment/Checkout";
import Invoice from "../Invoice/Invoice";

const Routes = () => {
  const loading = useSelector((state) => state.auctions.loading);

  const auctions = useSelector((state) => state.auctions.auctions);
  if (loading) return <Loading />;

  return (
    <Switch>
      <Route path={`/signup`}>
        <Signup />
      </Route>
      <Route path={`/signin`}>
        <Signin />
      </Route>
      <Route path="/categories/:categorySlug">
        <CategoryDetails />
      </Route>
      {/* <Route path={`/categories`}>
        <CategoryList />
      </Route> */}
      <Route path="/categories">
        <Combine />
      </Route>
      <Route exact path="/auctions/:auctionSlug">
        <AuctionDetails />
      </Route>
      <Route path="/addauction">
        <AddAuction />
      </Route>
      <Route path="/updateauction/:auctionId">
        <UpdateAuction />
      </Route>
      <Route path="/auctions">
        <AuctionList auctions={auctions} />
      </Route>{" "}
      <Route path="/cart">
        <Cart auctions={auctions} />
      </Route>{" "}
      <Route path="/paid">
        <Paid auctions={auctions} />
      </Route>{" "}
      <Route path="/checkout">
        <Checkout />
      </Route>
      <Route path="/addwallet">
        <AddWallet />
      </Route>
      <Route path="/fav">
        <FavList />
      </Route>{" "}
      <Route path="/invoice">
        <Invoice auctions={auctions}  />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};
export default Routes;
