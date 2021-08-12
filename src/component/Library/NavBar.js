import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import Signin from "../Auctions/Signin";

const NavBar = (props) => {
  const user = useSelector((state) => state.user.user);
  const history = useHistory();

  return (
    <div>
      <Link exact to="/">
        Home
      </Link>
      <br></br>
      <Link to="/category">category</Link>
      <br></br>
      <Link to="/signup">signup</Link>
      <br></br>
      <Link to="/signin">signin</Link>
    </div>
  );
};

export default NavBar;
