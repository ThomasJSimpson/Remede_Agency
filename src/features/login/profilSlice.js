import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  firstName: "",
  lastName: "",
  createdAt: "",
  updatedAt: "",
  id: "",
};

export const profilSlice = createSlice({
  name: "profil",
  initialState,
  reducers: {
    updateProfil: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { updateProfil } = profilSlice.actions;
export default profilSlice.reducer;
