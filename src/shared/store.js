import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { bugReducer } from "../features/bug/bugSlice";

export const store = configureStore({
  reducer: {
    bugs: bugReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});
