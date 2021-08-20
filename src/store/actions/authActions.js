import decode from "jwt-decode";
import * as actionTypes from "./types";
import instance from "./instance";

export const signup = (user, history) => {
  return async (dispatch) => {
    try {
      // REVIEW: Why is the signup not signing in? Fix it
      // REVIEW: Only use backticks `` if there is a variable inside the string
      const res = await instance.post(`/signup`, user);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
};

export const signin = (userData, history) => {
  return async (dispatch) => {
    try {
      // REVIEW: Only use backticks `` if there is a variable inside the string
      const res = await instance.post(`/signin`, userData);

      dispatch(setUser(res.data.token));
      history.push("/combine");
    } catch (error) {
      console.log(error);
    }
  };
};

export const signout = (history) => {
  history.push("/");
  return setUser();
};

export const checkForToken = () => {
  const token = localStorage.getItem("myToken");
  if (token) {
    const currentTime = Date.now();
    const user = decode(token);
    if (user.exp > currentTime) {
      return setUser(token);
    }
  }
  localStorage.removeItem("myToken");
  return {
    type: actionTypes.SET_USER,
    payload: null,
  };
};
const setUser = (token) => {
  if (token) {
    localStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    return {
      type: actionTypes.SET_USER,
      payload: decode(token),
    };
  } else {
    localStorage.removeItem("myToken");
    delete instance.defaults.headers.common.Authorization;
    return {
      type: actionTypes.SET_USER,
      payload: null,
    };
  }
};

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/users");
      dispatch({
        type: actionTypes.FETCH_USERS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
