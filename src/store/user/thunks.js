import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "./selectors";
import { appLoading, appDoneLoading, setMessage } from "../appState/slice";
import { showMessageWithTimeout } from "../appState/thunks";
import {
  loginSuccess,
  logOut,
  storeDescr,
  storePic,
  tokenStillValid,
  storeUserPage,
} from "./slice";

export const signUp = (name, email, password, isRealtor) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/auth/signup`, {
        name,
        email,
        password,
        isRealtor,
      });

      dispatch(
        loginSuccess({ token: response.data.token, user: response.data.user })
      );
      dispatch(showMessageWithTimeout("success", true, "account created"));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      } else {
        console.log(error.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.message,
          })
        );
      }
      dispatch(appDoneLoading());
    }
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, {
        email,
        password,
      });

      dispatch(
        loginSuccess({ token: response.data.token, user: response.data.user })
      );
      dispatch(showMessageWithTimeout("success", false, "welcome back!", 1500));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      } else {
        console.log(error.message);
        dispatch(
          setMessage({
            variant: "danger",
            dismissable: true,
            text: error.response.data.message,
          })
        );
      }
      dispatch(appDoneLoading());
    }
  };
};

export const getUserWithStoredToken = () => {
  return async (dispatch, getState) => {
    // get token from the state
    const token = selectToken()(getState());

    // if we have no token, stop
    if (token === null) return;

    dispatch(appLoading());
    try {
      // if we do have a token,
      // check wether it is still valid or if it is expired
      const response = await axios.get(`${apiUrl}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // token is still valid
      dispatch(tokenStillValid({ user: response.data }));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(logOut());
      dispatch(appDoneLoading());
    }
  };
};

export const postPic = (url) => async (dispatch, getState) => {
  const token = selectToken()(getState());

  try {
    const response = await axios.patch(
      `${apiUrl}/user/pic`,
      { imgUrl: url },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    console.log(response.data);
    if (response.data === "success") return dispatch(storePic(url));
    dispatch(showMessageWithTimeout("danger", false, response.data, 2000));
  } catch (e) {
    console.log(e.message);
  }
};

export const postDescr = (descr) => async (dispatch, getState) => {
  console.log(descr);
  const token = selectToken()(getState());

  try {
    const response = await axios.patch(
      `${apiUrl}/user/descr`,
      { description: descr },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    console.log(response.data);
    if (response.data === "success") return dispatch(storeDescr(descr));
    dispatch(showMessageWithTimeout("danger", false, response.data, 2000));
  } catch (e) {
    console.log(e.message);
  }
};

export const getUserPage = (id) => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/user/${id}`);

    dispatch(storeUserPage(response.data));
  } catch (e) {
    console.log(e.message);
  }
};
