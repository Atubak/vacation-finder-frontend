// const apiUrl = require("../../config/constants").apiUrl;
import { apiUrl } from "../../config/constants";
// const axios = require("axios");
import axios from "axios";

//actions
import {
  storeAllCategories,
  storeLocationUsers,
  storeResults,
  storeSelectedLocation,
  storeResultsAmt,
} from "./slice";
import { showMessageWithTimeout } from "../appState/thunks";
import { tokenStillValid } from "../user/slice";

export const getAllCategories = () => async (dispatch, getState) => {
  try {
    const gottenCats = await axios.get(`${apiUrl}/locations/categories`);
    console.log("thunk: ", gottenCats.data);
    dispatch(storeAllCategories(gottenCats.data));
  } catch (e) {
    console.log(e.message);
  }
};

export const getResults = () => async (dispatch, getState) => {
  const categories = getState().locations.query.categories;
  console.log(categories);
  try {
    const results = await axios.post(`${apiUrl}/locations`, { categories });
    console.log(results.data);
    dispatch(storeResults(results.data.randomLocationsArr));
    dispatch(storeResultsAmt(results.data.resultsAmt));
  } catch (e) {
    console.log(e.message);
  }
};

export const postFav = () => async (dispatch, getState) => {
  const location = getState().locations.selectedLocation;
  const token = getState().user.token;

  try {
    const response = await axios.post(
      `${apiUrl}/locations/favorites`,
      { location },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    console.log(response.data);

    //if the location was already in the favorites, it will have been deleted from the db
    if (response.data.msg === "deleted") {
      dispatch(
        showMessageWithTimeout(
          "success",
          false,
          "Location successfully removed!",
          2000
        )
      );
      return dispatch(tokenStillValid({ user: response.data.userWithLocs }));
    }

    dispatch(
      showMessageWithTimeout(
        "success",
        false,
        "Location successfully added!",
        2000
      )
    );
    dispatch(tokenStillValid({ user: response.data.userWithLocs }));
    dispatch(storeSelectedLocation(response.data.locWithDataPoints));
  } catch (e) {
    console.log(e.message);
  }
};

export const getLocationUsers = (locationId) => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/locations/${locationId}/users`);

    console.log(response.data);
    dispatch(storeLocationUsers(response.data));
  } catch (e) {
    console.log(e.message);
  }
};
