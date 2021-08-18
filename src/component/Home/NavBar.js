import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import pic1 from "../../images/pic1.png";
import pic5 from "../../images/pic5.png";
import pic7 from "../../images/pic7.png";
import { signout } from "../../store/actions/authActions";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import AddWallet from "../Wallet/AddWallet";

const NavBar = (props) => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handelSignout = (event) => {
    event.preventDefault();
    dispatch(signout(history));
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div>
        <Link className="logo" exact to="/">
          <img className="logo" src={pic1} alt={"pic1"} />
        </Link>
        {user ? (
          <>
           
            <Link className="category" to="/combine">
              Category
            </Link>
            z
            <Link className="addauction" to="/addauction">
              Add auctions
            </Link>
            <button className="signin1" onClick={handelSignout}>
              Sign out
            </button>
            <Link to="/fav">fav</Link>
            <Button variant="primary" onClick={handleShow}>
              Wallet
            </Button>

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

        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <AddWallet handleClose={handleClose} />
          </Modal.Body>
        </Modal>

      </div>
     
    </div>
  );
};

export default NavBar;
