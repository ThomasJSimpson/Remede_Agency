import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
  isLoginFailed: false,
};
export const loginInputSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    updateInputUsername: (state, action) => {
      state.username = action.payload;
      state.isLoginFailed = false;
    },
    updateInputPassword: (state, action) => {
      state.password = action.payload;
      state.isLoginFailed = false;
    },
    setLoginFailed: (state, action) => {
      state.isLoginFailed = action.payload;
    },
    resetInputs: (state, action) => {
      return initialState;
    },
  },
});

export const { updateInputUsername, updateInputPassword, resetInputs, setLoginFailed } = loginInputSlice.actions;
export default loginInputSlice.reducer;
