import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCategories: [], //array of all category names
  selectedLocation: {}, //one range object with datapoints inside
  query: {
    categories: [], //array of selected category names
    results: [], //array of range objects with datapoints
    resultsAmt: null,
  },
};

export const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    storeAllCategories: (state, action) => {
      state.allCategories = action.payload;
    },
    storeQueryCategories: (state, action) => {
      state.query.categories.push(action.payload);
    },
    clearQueryCategories: (state, action) => {
      state.query.categories = [];
    },
    removeQueryCategory: (state, action) => {
      const catToBeRemoved = action.payload;

      state.query.categories = state.query.categories.filter(
        (cat) => cat !== catToBeRemoved
      );
    },
    storeResults: (state, action) => {
      state.query.results = action.payload;
    },
    storeResultsAmt: (state, action) => {
      state.query.resultsAmt = action.payload;
    },
    clearResults: (state, action) => {
      state.query.results = [];
    },
    storeSelectedLocation: (state, action) => {
      state.selectedLocation = action.payload;
    },
    storeLocationUsers: (state, action) => {
      state.selectedLocation.locationUsers = action.payload;
    },
  },
});

export const {
  storeAllCategories,
  storeQueryCategories,
  storeResults,
  clearResults,
  clearQueryCategories,
  removeQueryCategory,
  storeSelectedLocation,
  storeLocationUsers,
  storeResultsAmt,
} = locationsSlice.actions;

export default locationsSlice.reducer;
