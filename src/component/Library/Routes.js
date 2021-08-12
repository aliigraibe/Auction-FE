import { Route, Switch } from "react-router";

import CategoryList from "../Auctions/CategoryList";
/* @Octowl either they're SignupForm and SigninForm or they're Singup and Signin */
import Signin from "../Auctions/Signin";
import SignupForm from "../Auctions/SignupForm";
import Home from "./Home";

const Routes = () => {
  return (
    <Switch>
      <Route path={`/signup`}>
        <SignupForm />
      </Route>
      <Route path={`/signin`}>
        <Signin />
      </Route>
      <Route path="/category">
        <CategoryList />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};
export default Routes;
