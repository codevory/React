import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    loading: false,
    results: [],
    error: null,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    updateResults: (state, action) => {
      state.results = action.payload;
    },

    setLoading: (state, action) => {
      ((state.value = action.payload), (error = null));
    },
    setError: (state, action) => {
      ((state.error = action.payload), (state.loading = false));
    },
  },
});

export const { updateResults, setError, setLoading, setQuery } =
  searchSlice.actions;
export default searchSlice.reducer;
