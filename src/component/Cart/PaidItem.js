import { Link } from "react-router-dom";
import pic5 from "../../images/pic5.png";
import pic17 from "../../images/pic17.png";
import { useDispatch, useSelector } from "react-redux";
import { FlexStyleVer } from "../../styles";
//

import { Modal, Button } from "react-bootstrap";

import Paid from "../Invoice/Invoice";
import { useState } from "react";
import Invoice from "../Invoice/Invoice";

const PaidItem = ({ auction, props }) => {
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
      <div class="card">
        <div class="card-inner">
          {" "}
          <img className="vehicle" src={auction.image[0]} alt={auction.name} />
          <p className="name">{auction.name}</p>
          <p className="pri">Price: {sort[0].bid}$</p>
          {auction.payStatus && (
            <div className="checkout">
              <button
                type="button"
                class="btn btn-danger"
                
                onClick={handleShow}
              >
                Receipt
              </button>{" "}
            </div>
          )}
          <Modal show={show} onHide={handleClose}>
            <Modal.Body>
              <Invoice
                sort={sort}
                auction={auction}
                handleClose={handleClose}
              />
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default PaidItem;
