import { Link } from "react-router-dom";
import pic5 from "../../images/pic5.png";
import pic17 from "../../images/pic17.png";
import { useDispatch, useSelector } from "react-redux";
import { FlexStyleVer } from "../../styles";
//

import { Modal, Button } from "react-bootstrap";

import Checkout from "../Payment/Checkout";
import { useState } from "react";

const CartItem = ({ auction, props }) => {
  const { user, users } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const sort = auction.bidding.sort((b, a) =>
    a.bid > b.bid ? 1 : b.bid > a.bid ? -1 : 0
  );

  return (
    <div className="box">
      <img className="check" src={auction.image[0]} alt={auction.name} />
      <p className="name">{auction.name}</p>
      <p className="time">Price: {sort[0].bid}$</p>
      {!auction.payStatus ? (
        <button className="checkout" onClick={handleShow}>
          Checkout
        </button>
      ) : (
        <p className="checkout">paid</p>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <FlexStyleVer>
            <img className="images" src={auction.image[0]} alt={auction.name} />

            <p>{auction.name}</p>

            <p>Price: {sort[0].bid}$</p>
            <Checkout auction={auction} handleClose={handleClose} />
          </FlexStyleVer>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CartItem;
