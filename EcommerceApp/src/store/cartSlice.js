import { createSlice } from "@reduxjs/toolkit";
import { Bounce, Slide, toast } from "react-toastify";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (!existingItem) {
        state.items.push({ ...action.payload, qty: 1 });
      } else {
        existingItem.qty += 1;
        console.log("Incremented qty for ID:", existingItem.id);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items = [];
    },
    clearedCart: function () {
      toast.success("Order placed successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
      });
    },
    addedToCart: function () {
      toast.success("added to Cart!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    },
    removedSuccessfully: function () {
      toast.warn("Removed Successfully!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    },
  },
});

export default cartSlice.reducer;
export const {
  setItems,
  removeItem,
  clearCart,
  addedToCart,
  removedSuccessfully,
  clearedCart,
} = cartSlice.actions;
