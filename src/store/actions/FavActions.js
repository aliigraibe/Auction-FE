import * as actionTypes from "./types";
import instance from "./instance";

export const addFouvarite = (userId, auctionId) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("addFav", {
        userId: userId,
        auctionId: auctionId,
      });
      dispatch({
        type: actionTypes.ADD_FAVOURITE,
        payload: { newFavourite: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteFavourite = (userId, auctionId) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("removeFav", {
        userId: userId,
        auctionId: auctionId,
      });
      dispatch({
        type: actionTypes.DELETE_FAVOURITE,
        payload: { favourite: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
