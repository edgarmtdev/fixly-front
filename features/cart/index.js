import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get, post } from "api";
import { CART_CONSTANTS } from "config/constants";

export const getCart = createAsyncThunk("cart/getCart", async function () {
  const response = await get(CART_CONSTANTS.getCart);
  return response.data;
});

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async function (data, thunkAPI) {
    try {
      const newItem = await post(CART_CONSTANTS.addItem, data);
      return newItem.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const shopProductNow = createAsyncThunk(
  "cart/shopProduct",
  async function (data, thunkAPI) {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          error: false,
          message: "ready",
        });
      }, 1000);
    });
    try {
      const resp = await promise;
      return resp;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  items: [],
  loading: true,
  error: false,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    reducePrice(state) {
      state.items.reduce(
        (res, item) => res + item.product.price * item.amount,
        0
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCart.fulfilled, (state, action) => {
        state.error = false;
        state.items = action.payload.data?.items;
        state.loading = false;
        if (action.payload.data.items) {
          state.total = state.items.reduce(
            (res, item) =>
              res + item.product.price.$numberDecimal * item.amount,
            0
          );
        }
      })
      .addCase(getCart.pending, (state) => {
        state.error = false;
        state.items = [];
        state.loading = true;
      })
      .addCase(getCart.rejected, (state) => {
        state.error = true;
        state.items = [];
        state.loading = false;
      });
    builder
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.result?.items;
      })
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCart.rejected, (state) => {
        state.loading = false;
      });
    // builder.addCase(shopProductNow.fulfilled, (state) => {
    //   // state.items = state.items;
    // });
  },
});

export const cartReducer = cartSlice.reducer;
