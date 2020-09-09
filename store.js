import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import userReducer from "./lib/slices/userSlice";
import productsReducer from "./lib/slices/productSlice";

export const makeStore = (context) =>
  configureStore({
    reducer: {
      user: userReducer,
      products: productsReducer,
    },
    devTools: process.env.NODE_ENV === "development",
  });

export const wrapper = createWrapper(makeStore, { debug: true });
