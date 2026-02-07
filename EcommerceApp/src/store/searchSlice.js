import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    status: "idle",
    query: "",
    results: [],
    error: null,
  },

  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        ((state.status = "loading"), (state.error = null));
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        const products = action.payload.products;
        if (products.length === 0) {
          state.status = "empty";
          state.results = [];
        }
        state.results = action.payload.products.map((item) => ({
          id: item.id,
          title: item.title,
          image: item.images[0],
          thumbnail: item.thumbnail,
          price: item.price,
          rating: item.rating,
          category: item.category,
          slug: item.title
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-"),
          description:
            item.title +
            "Lorem ipsum dolor sit amet consectetur adipisicing elit Soluta maiores ipsum ipsam culpa labore autem ab corrupti accusamus. Magni, vero?",
        }));
        state.status = "success";
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        ((state.status = "error"), (state.error = action.error.message));
      });
  },
});

export const { setQuery } = searchSlice.actions;
export default searchSlice.reducer;

export const fetchProducts = createAsyncThunk(
  "search/fetchProducts",
  async (query) => {
    const result = await fetch(
      `https://dummyjson.com/products/search?q=${query}`,
    );

    if (!result.ok) throw new Error("Failed to fetch products");
    return await result.json();
  },
);
