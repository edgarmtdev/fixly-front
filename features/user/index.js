import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get, post } from "../../api";
import AUTH_CONSTANTS from "../../config/constants/auth";

export const login = createAsyncThunk(
  "user/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await post(AUTH_CONSTANTS.login, credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const signUp = createAsyncThunk(
  "user/signup",
  async (data, thunkAPI) => {
    try {
      const response = await post("/api/auth/register", data);
      return response.data;
    } catch (error) {
      console.log("Error", { ...error });
      return thunkAPI.rejectWithValue(error.response.data);
    }
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
  id: "",
  auth: {
    hasError: true,
    login: {
      message: "",
    },
    signup: {
      message: "",
    },
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.logged = true;
        state.loading = false;
        state.name = action.payload.name;
        state.id = action.payload.id;
        (state.auth.hasError = false), (state.auth.login.message = "");
      })
      .addCase(login.pending, (state, action) => {
        state.logged = false;
        state.loading = true;
        state.message = "";
        state.name = "";
      })
      .addCase(login.rejected, (state, action) => {
        console.log(action);
        state.logged = false;
        state.loading = false;
        state.name = "";
        (state.auth.hasError = true),
          (state.auth.login.message = action.payload.message[0]);
      });
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.logged = true;
        state.loading = false;
        state.name = action.payload.name;
        state.id = action.payload.id;
      })
      .addCase(signUp.pending, (state, action) => {
        state.logged = false;
        state.loading = true;
        state.message = "";
        state.name = "";
      })
      .addCase(signUp.rejected, (state, action) => {
        console.log("data:", action);
        state.logged = false;
        state.loading = false;
        (state.auth.hasError = true),
          (state.auth.signup.message = action.payload.message);
        state.name = null;
      });
    builder
      .addCase(validation.fulfilled, (state, action) => {
        state.logged = true;
        state.loading = false;
        state.name = action.payload.user?.name;
        state.id = action.payload.user?.id;
      })
      .addCase(validation.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(validation.rejected, (state, action) => {
        state.logged = false;
        state.loading = false;
        state.message = action.error?.message;
        state.name = "";
      });
    builder
      .addCase(logOut.fulfilled, (state, action) => {
        state.logged = false;
        state.auth.hasError = false;
        state.loading = false;
        state.message = action.payload?.message;
        state.name = "";
      })
      .addCase(logOut.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.auth.hasError = true;
        state.loading = false;
      });
  },
});

export const userReducer = userSlice.reducer;
