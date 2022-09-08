import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCategories: ["ja"], //array of all category names
  selectedLocation: {}, //one range object with datapoints inside
  query: {
    categories: [], //array of selected category names
    results: [], //array of range objects with datapoints
  },
};

export const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {},
});

export const {} = locationsSlice.actions;

export default locationsSlice.reducer;
