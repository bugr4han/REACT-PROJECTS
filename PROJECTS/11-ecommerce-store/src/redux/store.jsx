import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import ProductSlice from "./ProductSlice";
import BasketSlice from "./BasketSlice";

export const store = configureStore({
  reducer: {
    app: AppSlice,
    product: ProductSlice,
    basket: BasketSlice,
  },
});
