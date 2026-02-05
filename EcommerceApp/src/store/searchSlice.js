import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
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
    setResults: (state, action) => {
      state.results = action.payload;
    },

    setLoading: (state, action) => {
      ((state.loading = action.payload), (state.error = null));
    },
    setError: (state, action) => {
      ((state.error = action.payload), (state.loading = false));
    },
  },
});

export const { setResults, setError, setLoading, setQuery } =
  searchSlice.actions;
export default searchSlice.reducer;
