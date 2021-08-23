import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const promise = loadStripe(
  "pk_test_51JRPUWDgpc1vbHxR44LnRxd8jG2OPnDSysNeU3JaXK5qAQrIn92B1v3tImfDrxSVNFjqSeDXmy81V0QiPeFaTB1p00YzSJCgCQ"
);

const Checkout = ({ auction }) => {
  return (
    <div>
      <Elements stripe={promise}>
        <CheckoutForm auction={auction} />
      </Elements>
    </div>
  );
};

export default Checkout;
