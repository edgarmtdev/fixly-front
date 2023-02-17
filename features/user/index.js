import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get, post } from "../../api";

export const login = createAsyncThunk(
  "user/login",
  async (credentials, thunkAPI) => {
    const response = await post("/api/auth/login", credentials);
    return response.data;
  }
);

export const signUp = createAsyncThunk(
  "user/signup",
  async (data, thunkAPI) => {
    const response = await post("/api/auth/register", data);
    return response.data;
  }
);

export const validation = createAsyncThunk(
  "user/validate",
  async (data, thunkAPI) => {
    const res = await get("/api/auth/validate");
    return res.data;
  }
);

export const logOut = createAsyncThunk(
  "user/logout",
  async (data, thunkAPI) => {
    const res = await get("api/auth/logout");
    return res.data;
  }
);

const initialState = {
  logged: false,
  name: "",
  loading: false,
  error: true,
  message: "",
  id: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.logged = true;
        state.error = false;
        state.loading = false;
        state.name = action.payload.name;
        state.id = action.payload.id;
      })
      .addCase(login.pending, (state, action) => {
        state.logged = false;
        state.loading = true;
        state.error = false;
        state.message = "";
        state.name = "";
      })
      .addCase(login.rejected, (state, action) => {
        state.logged = false;
        state.error = true;
        state.loading = false;
        state.message = action.payload.message;
        state.name = "";
      });
    builder
      .addCase(validation.fulfilled, (state, action) => {
        if (!action.payload) {
          throw new Error("Failed validation");
        }
        state.logged = true;
        state.error = false;
        state.loading = false;
        state.name = action.payload.user?.name;
        state.id = action.payload.user?.id;
      })
      .addCase(validation.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(validation.rejected, (state, action) => {
        state.logged = false;
        state.error = true;
        state.loading = false;
        state.message = action.error?.message;
        state.name = "";
      });
    builder
      .addCase(logOut.fulfilled, (state, action) => {
        state.logged = false;
        state.error = false;
        state.loading = false;
        state.message = action.payload?.message;
        state.name = "";
      })
      .addCase(logOut.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export const userReducer = userSlice.reducer;
