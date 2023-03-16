import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "./slices/mailSlice.js";

export const store = configureStore({
  reducer: {
    mail: mailReducer,
  },
});
