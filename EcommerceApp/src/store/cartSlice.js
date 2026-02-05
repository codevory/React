import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
  totalValue: 0,
};
console.log(initialState);
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (!existingItem) {
        console.log("New item Added");
        state.items.push({ ...action.payload, qty: 3 });
        console.log("Added:", action.payload.name);
      } else {
        existingItem.qty += 1;
        console.log("Incremented qty for ID:", existingItem.id);
      }
      console.log(state.items);
    },
    updateTotal: (state, action) => {
      state.totalValue = action.payload;
    },
  },
});

export default cartSlice.reducer;
export const { setItems, updateTotal } = cartSlice.actions;
