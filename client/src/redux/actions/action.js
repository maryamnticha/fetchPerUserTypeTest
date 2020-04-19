import axios from "axios";
import {
  REGISTER_USER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_USER,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  AUTH_USER,
  AUTH_FAIL,
  AUTH_SUCCESS,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_USER,
} from "../constants/action.type";

export const register = (user) => async (dispatch) => {
  dispatch({
    type: REGISTER_USER,
  });
  try {
    const registerResult = await axios.post("/register", user);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: registerResult.data,
    });
  } catch (error) {
    console.error(error.response);
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.errors,
    });
  }
};

export const login = (userCredential) => async (dispatch) => {
  dispatch({
    type: LOGIN_USER,
  });
  try {
    const loginResult = await axios.post("/login", userCredential);
    localStorage.setItem("token", loginResult.data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: loginResult.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.errors,
    });
  }
};
export const isAuthorized = () => async (dispatch) => {
  dispatch({
    type: AUTH_USER,
  });
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  try {
    const isAuth = await axios.get("/profile", config);
    dispatch({
      type: AUTH_SUCCESS,
      payload: isAuth.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_FAIL,
      payload: error.response.data.errors,
    });
  }
};
export const logout = (userCredential) => async (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };
  try {
    localStorage.removeItem("token");
    const loginResult = await axios.post("/login", userCredential);
    const isAuth = await axios.get("/profile", config);
    dispatch({
      type: LOGOUT_FAIL,
      payload: (loginResult, isAuth),
    });
  } catch (error) {
    dispatch({
      type: LOGOUT_SUCCESS,
      payload: error.response.data.errors,
    });
  }
};
