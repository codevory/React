import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./features/counterSlice";

export const store = configureStore({
  reducer: {
    counter: countReducer,
  },
});
