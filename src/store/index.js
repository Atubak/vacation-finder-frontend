import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";
import locationsReducer from "./locations/slice";

const store = configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    locations: locationsReducer,
  },
});

export default store;
