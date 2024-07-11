import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducers/productSlice.js";

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});
