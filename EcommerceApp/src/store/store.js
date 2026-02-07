import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import cartSlice from "./cartSlice";
import { cartMiddleWare } from "./cartMiddleware";
import { cartPersistMiddleware } from "./cartPersistMiddleware";
const store = configureStore({
  reducer: {
    search: searchSlice,
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(cartMiddleWare).concat(cartPersistMiddleware),
});

export default store;
