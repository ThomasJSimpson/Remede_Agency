import { createSlice } from "@reduxjs/toolkit";
const initialUser = { email: "", firstName: "", lastName: "", createdAt: "", updatedAt: "", id: "", isLoggedIn: false };
const initialState = JSON.parse(localStorage.getItem("user")) || initialUser;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserInfo: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    updateUserToken: (state, action) => {
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true,
      };
    },
    logOut: (state) => {
      localStorage.removeItem("user");
      return initialUser;
    },
  },
});

export const { updateUserInfo, updateUserToken, logOut } = userSlice.actions;
export default userSlice.reducer;
