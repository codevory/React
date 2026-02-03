import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [
    {
      product: [],
      qty: 0,
    },
  ],
  totalValue: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      const alreadyEx = state.items.find((pr) => pr.id === action.payload.id);
      if (!alreadyEx) {
        ((state.items = [...state.items, action.payload]),
          console.log("items update triggred"),
          console.log(state.items));
      } else {
        state.items = [...state.items, (state.items.qty += 1)];
      }
    },
    updateTotal: (state, action) => {
      state.totalValue = action.payload;
    },
  },
});

export default cartSlice.reducer;
export const { setItems, updateTotal } = cartSlice.actions;
