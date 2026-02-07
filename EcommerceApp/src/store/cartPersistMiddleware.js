import { addItem, clearCart, removeItem } from "./cartSlice";

export const cartPersistMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (
    addItem.match(action) ||
    removeItem.match(action) ||
    clearCart.match(action)
  ) {
    const items = store.getState().cart.items;
    localStorage.setItem("cart", JSON.stringify(items));
  }

  // const state = store.getState();

  // if (state?.cart?.items) {
  //   localStorage.setItem("cart", JSON.stringify(state.cart.items));
  // }

  return result;
};
