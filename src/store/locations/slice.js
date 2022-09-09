import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCategories: [], //array of all category names
  selectedLocation: {}, //one range object with datapoints inside
  query: {
    categories: [], //array of selected category names
    results: [], //array of range objects with datapoints
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
    clearResults: (state, action) => {
      state.query.results = [];
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
} = locationsSlice.actions;

export default locationsSlice.reducer;
