import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import cartSlice from "./cartSlice";
const store = configureStore({
  reducer: {
    search: searchSlice,
    cart: cartSlice,
  },
});

export default store;
