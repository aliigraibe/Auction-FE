import { Switch, Route } from "react-router";
import Home from "./Home";

import SignupForm from "../Auctions/SignupForm";
import Signin from "../Auctions/Signin";

const Routes = () => {
  return (
    <Switch>
      <Route path={`/signup`}>
        <SignupForm />
      </Route>
      <Route path={`/signin`}>
        <Signin />
      </Route>

      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};
export default Routes;
