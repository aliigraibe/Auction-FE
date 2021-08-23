import * as actionTypes from "./types";
import instance from "./instance";

export const paymentIntent = (auctionId) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/create-payment-intent", {
        items: [{ id: auctionId }],
      });
      dispatch({
        type: actionTypes.PAYMENT_INTENT,
        payload: res.data.clientSecret,
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
};
