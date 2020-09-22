import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

import { HYDRATE } from "next-redux-wrapper";
import { hydrate } from "react-dom";
import axios from "axios";

const backendUrl = "https://localhost:5001";

export const loadProducts = createAsyncThunk(
  "products/loadProducts",
  async (query = "/products", thunkAPI) => {
    console.log(1);

    try {
      console.log(1);
      const response = await axios.get(`/api/${query}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
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
      console.log("fullfiled");
      state.items = action.payload.data;
      state.loading = false;
      state.isSuccess = true;
    },

    [loadProducts.rejected]: (state, action) => {
      console.log("asdasd");
      state.loading = false;
      state.isError = true;
      state.error = action.payload.error;
    },
    [HYDRATE]: (state, action) => {
      console.log("hydrate");
      console.log(action.payload);
      state.items = action.payload.products.items;
    },
  },
});

export const selectProducts = createSelector(
  (state) => ({
    products: state.products.items,
    error: "",
  }),
  (state) => state
);

export default productsSlice.reducer;
