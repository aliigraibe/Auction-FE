import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import pic1 from "../../images/pic1.png";
import { signout } from "../../store/actions/authActions";

const NavBar = (props) => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handelSignout = (event) => {
    event.preventDefault();
    dispatch(signout(history));
  };

  return (
    <div>
      <div>
        <Link className="logo" exact to="/">
          <img className="logo" src={pic1} alt={"pic1"} />
        </Link>
        {user ? (
          <>
            <p className="signup">Hello {user.username}</p>
            <Link className="category" to="/combine">
              Category
            </Link>
            z
            <Link className="addauction" to="/addauction">
              Add auctions
            </Link>
            <button className="signin" onClick={handelSignout}>
              Sign out
            </button>
            <Link to="/fav">fav</Link>
          </>
        ) : (
          <>
            <Link className="signin" to="/signin">
              Sign in
            </Link>
            <Link className="signup" to="/signup">
              Sign up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
