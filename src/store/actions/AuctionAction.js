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
export const addAuction = (newAuction, history) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newAuction) formData.append(key, newAuction[key]);

      Array.from(newAuction.image).forEach((image) => {
        formData.append("image", image);
      });
      const res = await instance.post("createAuction", formData);
      dispatch({
        type: actionTypes.ADD_AUCTION,
        payload: { newAuction: res.data },
      });
      history.push("/combine");
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteAuction = (auctionId) => {
  return async (dispatch) => {
    try {
      await instance.post(`/deleteAuction`, { _id: auctionId });
      dispatch({
        type: actionTypes.DELETE_AUCTION,
        payload: { auctionId: auctionId },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateAuction = (auctionId, auction) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in auction) formData.append(key, auction[key]);
      const res = await instance.put(`/updateAuction/${auctionId}`, formData);
      dispatch({
        type: actionTypes.UPDATE_AUCTION,
        payload: { auctionId: auctionId },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
