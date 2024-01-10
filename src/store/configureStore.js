import { configureStore } from "@reduxjs/toolkit";
import loginInputReducer from "../features/loginSlice.js";
import editNamereducer from "../features/editNameSlice.js";
import userReducer from "../features/userSlice.js";

export const store = configureStore({
  reducer: {
    loginInput: loginInputReducer,
    editNameInput: editNamereducer,
    user: userReducer,
  },
});
