import { addItem, removeItem, clearCart } from "./cartSlice";
import { Bounce, Slide, toast } from "react-toastify";

export const cartMiddleWare = (store) => (next) => (action) => {
  if (addItem.match(action)) {
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
  }

  if (removeItem.match(action)) {
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
  }

  if (clearCart.match(action)) {
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
  }

  return next(action);
};
