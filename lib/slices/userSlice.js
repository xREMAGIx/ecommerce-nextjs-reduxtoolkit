import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

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

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    loading: false,
    isError: false,
    isSuccess: false,
  },
  reducers: {},
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
  },
});

export const selectUser = createSelector(
  (state) => ({
    token: state.user.token,
    error: state.user.error,
  }),
  (state) => state
);

export default userSlice.reducer;
