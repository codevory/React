export const cartPersistMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  const state = store.getState();

  if (state?.cart?.items) {
    localStorage.setItem("cart", JSON.stringify(state.cart.items));
  }

  return result;
};
