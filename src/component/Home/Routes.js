import { Switch, Route } from "react-router";
import Home from "./Home";

import SignupForm from "../Category/SignupForm";
import Signin from "../Category/Signin";
import CategoryList from "../Category/CategoryList";
import AuctionList from "../Auction/AuctionList";
import AddAuction from "../Auction/AddAuction";
import CategoryDetails from "../Category/CategoryDetails";
import AuctionDetails from "../Auction/AuctionDetails";

const Routes = () => {
  return (
    <Switch>
      <Route path={`/signup`}>
        <SignupForm />
      </Route>
      <Route path={`/signin`}>
        <Signin />
      </Route>
      <Route path={`/categories/:categoryId`}>
        <CategoryDetails />
      </Route>
      <Route path={`/categories`}>
        <CategoryList />
      </Route>
      <Route exact path="/auctions/:auctionId">
        <AuctionDetails />
      </Route>
      <Route path={`/addauction`}>
        <AddAuction />
      </Route>
      <Route path={`/auctions`}>
        <AuctionList />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};
export default Routes;
