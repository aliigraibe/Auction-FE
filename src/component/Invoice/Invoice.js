import { useSelector } from "react-redux";
import "./Invoice.css";
const Invoice = ({ auction, sort }) => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="receipt-content">
      <div className="row">
        <div className="col-md-12">
          <div className="invoice-wrapper">
            <strong>Mazad</strong>
            <div className="intro">
              Hi <strong>{user.username}</strong>,
              <br />
            </div>
            <div className="row">
              <div className="col-sm-6">
                <span>Payment No.</span>
                <br />
                <strong>424242424</strong>
              </div>
              <span>Payment Date</span>
              <strong>Jul 09,2014-12:20pm</strong>
              <div className="col-sm-6 text-right"></div>
            </div>
            <div className="payment-details">
              <div className="row">
                <div className="col-sm-6">
                  <span>Client</span>
                  <strong>{user.username}</strong>
                  <p>
                    ++966 <br />
                    Jordan <br />
                    <a href="#">{user.email}</a>
                  </p>
                </div>
                <div className="col-sm-6 text-right">
                  <span>Payment To</span>
                  <strong>Mazad</strong>
                  <p>
                    Jordan,Amman
                    <br />
                    <a href="#">Mazad@info.com</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="payment-details">
              <div className="row">
                <div className="col-sm-6">
                  <span>Name Of Product</span>
                  <p>
                    {auction.name} <br />
                  </p>
                </div>
                <div className="col-sm-6 text-right">
                  <span>Amount</span>
                  <p> {sort[0].bid}(USD)</p>
                  <p>
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="line-items">
              <div className="headers clearfix">
                <div className="row"></div>
              </div>

              <div className="total text-right">
                <p className="extra-notes">
                  <strong>Extra Notes</strong>
                  Please send all items at the same time to shipping address by
                  next week. Thanks a lot.
                </p>
                <div className="field">
                  Subtotal <span> {sort[0].bid}(USD)</span>
                </div>
                <div className="field">
                  Shipping <span>$0.00</span>
                </div>
                <div className="field">
                  Discount <span>0</span>
                </div>
                <div className="field grand-total">
                  Total <span>{sort[0].bid}(USD)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Invoice;
