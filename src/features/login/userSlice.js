import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("user")) || { email: "", firstName: "", lastName: "", createdAt: "", updatedAt: "", id: "", isLoggedIn: false };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    stateUserInfo: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    stateUserToken: (state, action) => {
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true,
      };
    },
    logOut: (state) => {
      localStorage.removeItem("user");
      return { email: "", firstName: "", lastName: "", createdAt: "", updatedAt: "", id: "", isLoggedIn: false };
    },
  },
});

export const { stateUserInfo, stateUserToken, logOut } = userSlice.actions;
export default userSlice.reducer;
