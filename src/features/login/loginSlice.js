import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
};
export const loginInputSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    updateInputUsername: (state, action) => {
      state.username = action.payload;
    },
    updateInputPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { updateInputUsername, updateInputPassword } = loginInputSlice.actions;
export default loginInputSlice.reducer;
