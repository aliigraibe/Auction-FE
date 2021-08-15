import * as actionTypes from "./types";
import instance from "./instance";

export const fetchWallet = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/wallets");
      dispatch({
        type: actionTypes.FETCH_WALLET,

        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const addWallet = (newWallet) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("createWallet", newWallet);
      dispatch({
        type: actionTypes.ADD_WALLET,
        payload: { newWallet: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
