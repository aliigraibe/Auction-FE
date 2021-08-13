import * as actionTypes from "./types";
import instance from "./instance";

export const fetchAuction = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/auctions");
      dispatch({
        type: actionTypes.FETCH_AUCTION,

        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const addAuction = (newAuction) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newAuction) formData.append(key, newAuction[key]);
      // let productimages = [];
      // for (let i = 0; i < newAuction.image.length; i++) {
      //   productimages.push(newAuction.image[i]);
      // }
      // formData.append("image", productimages);
      const res = await instance.post("createAuction", formData);
      dispatch({
        type: actionTypes.ADD_AUCTION,
        payload: { newAuction: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteAuction = (auctionId) => {
  return async (dispatch) => {
    try {
      await instance.delete(`/deleteAuction`);
      dispatch({
        type: actionTypes.DELETE_AUCTION,
        payload: { auctionId: auctionId },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateAuction = (updateAuction) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in updateAuction) formData.append(key, updateAuction[key]);
      const res = await instance.put(`/updateAuction`, formData);
      dispatch({
        type: actionTypes.UPDATE_AUCTION,
        payload: { updateAuction: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
