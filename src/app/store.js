import { configureStore } from "@reduxjs/toolkit";
import loginInputReducer from "../features/login/loginSlice.js";
import editNamereducer from "../features/login/editNameSlice.js";
import userReducer from "../features/login/userSlice.js";
// import authReducer from "../features/authSlice.js";

export const store = configureStore({
  reducer: {
    loginInput: loginInputReducer,
    editNameInput: editNamereducer,
    user: userReducer,
  },
});
