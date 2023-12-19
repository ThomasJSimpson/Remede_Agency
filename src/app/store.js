import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/login/loginSlice.js";
import profilReducer from "../features/login/profilSlice.js";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    profil: profilReducer,
  },
});
