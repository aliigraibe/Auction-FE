import * as actionTypes from "./types";
import instance from "./instance";

// REVIEW: File names need to be concictent, some of them are PascalCase, others are camelCase
// Actions and reducers should be camelCase not PascalCase

// REVIEW: fix the typo, addFavourite
export const addFouvarite = (userId, auctionId) => {
  return async (dispatch) => {
    try {
      // REVIEW: You dont pass the user  ID in the body, you pass it in the token only
      // I think it's /addFav not addFav
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
      // REVIEW: You dont pass the user  ID in the body, you pass it in the token only
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
