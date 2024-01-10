import { createSlice } from "@reduxjs/toolkit";
const initialUser = { email: "", firstName: "", lastName: "", createdAt: "", updatedAt: "", id: "", isLoggedIn: false, isRemembered: false };
const initialState = JSON.parse(sessionStorage.getItem("user")) || JSON.parse(localStorage.getItem("user")) || initialUser;

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
    setRememberMe: (state, action) => {
      return {
        ...state,
        isRemembered: action.payload,
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
      sessionStorage.removeItem("user");
      localStorage.removeItem("user");
      return initialUser;
    },
  },
});

export const { updateUserInfo, setRememberMe, updateUserToken, logOut } = userSlice.actions;
export default userSlice.reducer;
