import Signin from "../Category/Signin";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const user = useSelector((state) => state.user.user);
  const history = useHistory();

  return (
    <div>
      <Link exact to="/">
        Home
      </Link>
      <br></br>
      <Link to="/categories">category</Link>
      <Link to="/auctions">auctions</Link>
      <br></br> <Link to="/addauction">addauctions</Link>
      <br></br>
      <Link to="/signup">signup</Link>
      <br></br>
      <Link to="/signin">signin</Link>
    </div>
  );
};

export default NavBar;
