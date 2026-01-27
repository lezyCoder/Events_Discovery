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
      ((state.isAuthenticated = true),
        (state.email = action.payload),
        (state.loading = false));
    },

    authFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
  },
});

export const {
  authStart,
  loginSuccess,
  authFailure,
  logoutUser,
} = authSlice.actions;

export default authSlice.reducer;