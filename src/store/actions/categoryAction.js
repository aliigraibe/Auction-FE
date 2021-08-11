import * as actionTypes from "./types";
import instance from "./instance";

export const fetchCategory = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/category");
      dispatch({
        type: actionTypes.FETCH_CATEGORY,

        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
