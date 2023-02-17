import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../features/cart";
import { productReducer } from "../features/product";
import { userReducer } from "../features/user";

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    cart: cartReducer,
  },
});

export default store;
