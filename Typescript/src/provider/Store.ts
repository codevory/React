import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './features/search';
import dataReducer  from './features/fetchData'
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";

const store = configureStore({
  reducer : {
  search : searchReducer,
  data: dataReducer,
  }
})

export default store;

export const useAppDispatch:() => typeof store.dispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;