// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FlexStyle } from "../../styles";
import pic1 from "../../images/pic1.png";

const NavBar = (props) => {
  // const user = useSelector((state) => state.user.user);

  return (
    <div>
      <div>
      <img className="logo" src={pic1} alt={"pic1"}/>
      <Link className="home"  exact to="/">
       Home
      </Link>
      <Link className="category" to="/categories" >
        Category
      </Link>

      <Link className="addauction" to="/addauction" >
        Add auctions
      </Link>
      <Link className="signin" to="/signin" >
        Sign in
      </Link>
      <Link className="signup" to="/signup" >
        Sign up
      </Link>
      </div>
      </div>
  );
};

export default NavBar;
