import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

import axios from "axios";
import Login from "../../pages/login";

// const backendUrl = "http://localhost:8000";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};
export const login = createAsyncThunk(
  "/api/account/login",
  async (user, thunkAPI) => {
    const { email, password } = user;
    const body = JSON.stringify(user);
    try {
      const response = await axios.post(`/api/account/login`, body, config);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const register = createAsyncThunk(
  "user/register",
  async (user, thunkAPI) => {
    const { username, password, repassword } = user;

    try {
      const response = await fetch(`/api/auth/register`, {
        method: "POST",
        body: JSON.stringify({ username, password, repassword }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    loading: false,
    isError: false,
    isSuccess: false,
  },
  reducers: {
    logout: (state) => {
      state.token = "";
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      console.log("ffddf");
      state.loading = true;
      state.isError = false;
      state.isSuccess = false;
    },
    [login.fulfilled]: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.loading = false;
      state.isSuccess = true;
    },
    [login.rejected]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.isError = true;
      state.error = action.payload.error;
    },
    [register.pending]: (state) => {
      state.loading = true;
      state.isError = false;
      state.isSuccess = false;
    },
    [register.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      state.loading = false;
      state.isSuccess = true;
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
      state.isError = true;
      state.error = action.payload.error;
    },
  },
});

export const { logout } = userSlice.actions;

export const selectUser = createSelector(
  (state) => ({
    token: state.user.token,
    error: state.user.error,
  }),
  (state) => state
);

export default userSlice.reducer;
