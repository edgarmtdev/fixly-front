import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, productReducer, userReducer } from "../features";

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    cart: cartReducer,
  },
});

export default store;
