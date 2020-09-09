import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

// const backendUrl = "http://localhost:8000";

export const login = createAsyncThunk("user/login", async (user, thunkAPI) => {
  const { username, password } = user;

  try {
    const response = await fetch(`/api/auth/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.json();
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

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
      state.loading = true;
      state.isError = false;
      state.isSuccess = false;
    },
    [login.fulfilled]: (state, action) => {
      state.token = action.payload.token;
      state.loading = false;
      state.isSuccess = true;
    },
    [login.rejected]: (state, action) => {
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
