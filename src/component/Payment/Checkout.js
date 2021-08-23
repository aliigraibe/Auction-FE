import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const promise = loadStripe(
  "pk_test_51JRdXhLDAcptJkvcvRlJ2SiKwJF1mvE4cg1h5am5oRLRcjrtJPHCvVWmJO9mhhbNu9U5woa5aATlPjCfAtvvHnqL00mtr52AvH"
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
