import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import axios from "axios";

const backendUrl = "http://localhost:8000";

export const loadProducts = createAsyncThunk(
  "products/loadProducts",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${backendUrl}/api/products`);

      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    item: null,
    items: [],
    loading: false,
    isError: false,
    isSuccess: false,
  },
  reducers: {},
  extraReducers: {
    [loadProducts.pending]: (state) => {
      state.items = [];
      state.loading = true;
      state.isError = false;
      state.isSuccess = false;
    },
    [loadProducts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.loading = false;
      state.isSuccess = true;
    },

    [loadProducts.rejected]: (state, action) => {
      state.loading = false;
      state.isError = true;
      state.error = action.payload.error;
    },
    [HYDRATE]: (state, action) => {
      state.items = action.payload.products.items;
    },
  },
});

export const selectProducts = createSelector(
  (state) => ({
    products: state.products.items,
    error: state.products.error,
  }),
  (state) => state
);

export default productsSlice.reducer;
