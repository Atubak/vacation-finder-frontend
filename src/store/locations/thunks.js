// const apiUrl = require("../../config/constants").apiUrl;
import { apiUrl } from "../../config/constants";
// const axios = require("axios");
import axios from "axios";

//actions
import { storeAllCategories, storeResults } from "./slice";

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
    dispatch(storeResults(results.data));
  } catch (e) {
    console.log(e.message);
  }
};
