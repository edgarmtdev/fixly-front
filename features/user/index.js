import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get, post } from "api";
import { AUTH_CONSTANTS } from "config/constants";

const errors = {
  ERR_CONNECTION_REFUSED: "An error has occurred. Try again!",
  SIMPLE_ERROR_LOGIN: "",
};

export const login = createAsyncThunk(
  "user/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await post(AUTH_CONSTANTS.login, credentials, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      if (!error.response) {
        return thunkAPI.rejectWithValue(errors.ERR_CONNECTION_REFUSED);
      }

      let message;

      if (typeof error.response.data.message === "string") {
        message = error.response.data.message;
      } else {
        message = error.response.data.message[0];
      }

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const signUp = createAsyncThunk(
  "user/signup",
  async (data, thunkAPI) => {
    try {
      const response = await post(AUTH_CONSTANTS.signup, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors[0]);
    }
  }
);

export const validation = createAsyncThunk(
  "user/validate",
  async (data, thunkAPI) => {
    try {
      const res = await get(AUTH_CONSTANTS.validation);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logOut = createAsyncThunk("user/logout", async () => {
  const res = await get(AUTH_CONSTANTS.logout);
  return res.data;
});

const initialState = {
  logged: false,
  name: "",
  loading: false,
  id: "",
  message: "",
  role: undefined,
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
        state.loading = false;
        state.logged = true;
        state.name = action.payload.name;
        state.id = action.payload.id;
        state.auth.login.message = "";
        state.auth.hasError = false;
        state.message = `Hello ${action.payload.name}`;
        state.role = action.payload.role;
      })
      .addCase(login.pending, (state) => {
        state.logged = false;
        state.loading = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.logged = false;
        state.loading = false;
        state.name = "";
        state.message = "";
        state.auth.hasError = true;
        state.auth.login.message = action.payload;
      });
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.logged = true;
        state.loading = false;
        state.name = action.payload.name;
        state.id = action.payload.id;
        state.role = undefined;
        state.message = "";
      })
      .addCase(signUp.pending, (state) => {
        state.logged = false;
        state.loading = true;
        state.message = "";
        state.name = "";
      })
      .addCase(signUp.rejected, (state, action) => {
        state.logged = false;
        state.loading = false;
        state.auth.hasError = true;
        state.auth.signup.message = action.payload.message;
        state.name = null;
      });
    builder
      .addCase(validation.fulfilled, (state, action) => {
        state.logged = true;
        state.loading = false;
        state.name = action.payload.user?.name;
        state.id = action.payload.user?.id;
        state.role = action.payload.user?.role;
      })
      .addCase(validation.pending, (state) => {
        state.loading = true;
      })
      .addCase(validation.rejected, (state) => {
        state.logged = false;
        state.loading = false;
        // state.message = action.payload.message;
        state.name = "";
      });
    builder
      .addCase(logOut.fulfilled, (state) => {
        state.logged = false;
        state.name = "";
        state.loading = false;
        state.message = "";
        state.auth.signup.message = "";
        state.auth.login.message = "";
        state.auth.hasError = false;
      })
      .addCase(logOut.pending, (state) => {
        state.loading = true;
      })
      .addCase(logOut.rejected, (state) => {
        state.auth.hasError = true;
        state.loading = false;
      });
  },
});

export const userReducer = userSlice.reducer;
