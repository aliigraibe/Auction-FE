import { Switch, Route } from "react-router";
import Home from "./Home";

import Signup from "../Category/Signup";
import Signin from "../Category/Signin";
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

const Routes = () => {
  const loading = useSelector((state) => state.auctions.loading);

  const auctions = useSelector((state) => state.auctions.auctions);
  if (loading) return <p>loading...</p>;

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
      <Route path={`/categories`}>
        <CategoryList />
      </Route>
      <Route path="/combine">
        <Combine />
      </Route>{" "}
      <Route exact path="/auctions/:auctionSlug">
        <AuctionDetails />
      </Route>
      <Route path={`/addauction`}>
        <AddAuction />
      </Route>{" "}
      <Route path={`/updateauction/:auctionId`}>
        <UpdateAuction />
      </Route>
      <Route path={`/auctions`}>
        <AuctionList auctions={auctions} />
      </Route>{" "}
      <Route path={`/addwallet`}>
        <AddWallet />{" "}
      </Route>{" "}
      <Route path={`/fav`}>
        <FavList />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};
export default Routes;
