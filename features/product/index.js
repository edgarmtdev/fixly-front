import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get, post } from "api";
import { PRODUCTS_CONSTANTS } from "config/constants";

export const createProduct = createAsyncThunk(
  "product/create",
  /**
   * Feature to create a new product
   * @param {Object} params.body
   * @param {FormData} params.img
   * @returns {Object}
   */
  async (params) => {
    const response = await post(PRODUCTS_CONSTANTS.create, params);
    console.log(params);
    return response.data;
  }
);

export const getProducts = createAsyncThunk("get/products", async () => {
  const response = await get(PRODUCTS_CONSTANTS.getAll);
  return response.data;
});

export const getProduct = createAsyncThunk("get/product", async (params) => {
  const product = await get(`/api/products/${params.id}`);
  return product.data;
});

const initialState = {
  loading: false,
  error: false,
  products: [],
};

const productSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(createProduct.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.products = [...state.products, action.payload.product];
      });
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getProducts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.products = action.payload.products;
      });
  },
});

export const productReducer = productSlice.reducer;
