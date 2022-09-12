import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  profile: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.profile = action.payload.user;
    },
    logOut: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.profile = null;
    },
    tokenStillValid: (state, action) => {
      state.profile = action.payload.user;
    },
    storePic: (state, action) => {
      state.profile.imgUrl = action.payload;
    },
    storeDescr: (state, action) => {
      state.profile.description = action.payload;
    },
  },
});

export const { loginSuccess, logOut, tokenStillValid, storePic, storeDescr } =
  userSlice.actions;

export default userSlice.reducer;
