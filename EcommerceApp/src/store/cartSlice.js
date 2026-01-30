import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [
    {
      name: "",
      price: 0,
      quantity: 0,
    },
  ],
  totalValue: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      ((state.items.name = action.payload),
        (state.items.image = action.payload));
      state.items.price = action.payload;
      console.log(items);
    },
    updateTotal: (state, action) => {
      state.totalValue = action.payload;
    },
  },
});

export default cartSlice.reducer;
export const { setItems, updateTotal } = cartSlice.actions;
