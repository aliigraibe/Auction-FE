import * as actionTypes from "./types";
import instance from "./instance";

export const fetchCategory = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/categories");
      dispatch({
        type: actionTypes.FETCH_CATEGORIES,

        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
