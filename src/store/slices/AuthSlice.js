import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isUserLogin: false,
    user: {},
  },
  reducers: {
    loginSucces: (state, action) => {
      state.isUserLogin = true;
      state.user = action.payload;
    },
    loginFailed: (state) => {
      state.isUserLogin = false;
      state.user = {};
    },
    logout: (state) => {
      state.isUserLogin = false;
      state.user = {};
    },
  },
});

export const { loginSucces, loginFailed, logout } = authSlice.actions;
export default authSlice.reducer;
