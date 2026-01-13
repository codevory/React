import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setIncrement: (state) => {
      state.value += 1;
    },
    setDecrement: (state) => {
      state.value -= 1;
    },
    incrementByNum: (state, action) => {
      state.value += action.payload;
    },
    decrementByNum: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { setDecrement, setIncrement, incrementByNum, decrementByNum } =
  counterSlice.actions;
export default counterSlice.reducer;
