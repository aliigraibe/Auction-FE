import * as actionTypes from "./types";
import instance from "./instance";

export const fetchFavs = (userId) => {
  return async (dispatch) => {
    try {
      console.log(userId);
      const res = await instance.get(`/favourites/${userId}`);

      console.log(res.data);
      dispatch({
        type: actionTypes.FETCH_FAVS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
