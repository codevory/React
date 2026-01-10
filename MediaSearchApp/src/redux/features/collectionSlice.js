import { createSlice } from "@reduxjs/toolkit";
import { Bounce, Slide, toast } from "react-toastify";

const initialState = {
  items: JSON.parse(localStorage.getItem("collection")) || [],
};
const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addToCollection(state, action) {
      const alreadyExists = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!alreadyExists) {
        state.items.push(action.payload);
        localStorage.setItem("collection", JSON.stringify(state.items));
      }
      console.log("collection call from collection slice \n");
    },
    removeCollection: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("collection", JSON.stringify(state.items));
    },
    clearCollection(state) {
      state.items = [];
      localStorage.clear("collection");
    },
    addedToast: () => {
      toast.success("Added to myCollection!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    },
    removedToast: () => {
      toast.success("Removed Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    },
  },
});

export const {
  addToCollection,
  removeCollection,
  clearCollection,
  addedToast,
  removedToast,
} = collectionSlice.actions;
export default collectionSlice.reducer;
