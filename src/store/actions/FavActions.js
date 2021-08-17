import * as actionTypes from "./types";
import instance from "./instance";

export const fetchFavs = (userId) => {
  return async (dispatch) => {
    try {
      const res = await instance.get(`/favourites/${userId}`);

      dispatch({
        type: actionTypes.FETCH_FAVS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const addFouvarite = (a, b) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("addFavourite", {
        userId: a,
        auctionId: b,
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

export const deleteFavourite = (favouriteId) => {
  return async (dispatch) => {
    try {
      await instance.post(`/removeFavurite`, { favId: favouriteId });
      dispatch({
        type: actionTypes.DELETE_FAVOURITE,
        payload: { favouriteId: favouriteId },
      });
    } catch (error) {
      console.log(error);
    }
  };
}