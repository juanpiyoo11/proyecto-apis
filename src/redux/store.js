import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducers/productSlice.js";
import {carritoSlice} from "./reducers/CarritoSlice.js";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: carritoSlice,
  },
});
