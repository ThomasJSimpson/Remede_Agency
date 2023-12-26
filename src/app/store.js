import { configureStore } from "@reduxjs/toolkit";
import loginInputReducer from "../features/login/loginSlice.js";
import userReducer from "../features/login/userSlice.js";
// import authReducer from "../features/authSlice.js";

export const store = configureStore({
  reducer: {
    loginInput: loginInputReducer,
    user: userReducer,
  },
});
