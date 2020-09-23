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

export const loadProduct = createAsyncThunk(
  "products/loadProduct",
  async (slug, thunkAPI) => {
    try {
      console.log(slug);
      const response = await axios.get(`/api/products/${slug}`);
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
      console.log(action.payload);
      state.items = action.payload.products.items;
    },
    [loadProduct.pending]: (state) => {
      state.items = [];
      state.loading = true;
      state.isError = false;
      state.isSuccess = false;
    },
    [loadProduct.fulfilled]: (state, action) => {
      state.item = action.payload.data;
      state.loading = false;
      state.isSuccess = true;
    },
    [loadProduct.rejected]: (state, action) => {
      state.items = [];
      state.item = null;
      state.loading = false;
      state.isError = true;
      state.error = action.payload.error;
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

export const selectProduct = createSelector(
  (state) => ({
    product: state.products.item,
  }),
  (state) => state
);
export default productsSlice.reducer;
