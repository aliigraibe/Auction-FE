// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FlexStyle } from "../../styles";

const NavBar = (props) => {
  // const user = useSelector((state) => state.user.user);

  return (
    <FlexStyle style={{ marginBottom: "50px" }}>
      <Link style={{ margin: "10px" }} exact to="/">
        Home
      </Link>
      <Link to="/categories" style={{ margin: "10px" }}>
        category
      </Link>

      <Link to="/addauction" style={{ margin: "10px" }}>
        addauctions
      </Link>
      <Link to="/signup" style={{ margin: "10px" }}>
        signup
      </Link>
      <Link to="/signin" style={{ margin: "10px" }}>
        signin
      </Link>
    </FlexStyle>
  );
};

export default NavBar;
