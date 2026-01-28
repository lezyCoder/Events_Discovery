import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.email = action.payload;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },

    authFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    logoutUser: (state) => {
      state.email = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
  },
});

export const { authStart, loginSuccess, authFailure, logoutUser } =
  authSlice.actions;

export default authSlice.reducer;
