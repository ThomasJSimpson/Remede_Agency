import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
};
export const loginSlice = createSlice({
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

export const { updateInputUsername, updateInputPassword } = loginSlice.actions;
export default loginSlice.reducer;
