import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  onEdit: false,
};
export const editNameInputSlice = createSlice({
  name: "editName",
  initialState,
  reducers: {
    enableEdit: (state, action) => {
      state.onEdit = true;
    },
    updateInputFirstname: (state, action) => {
      state.firstName = action.payload;
    },
    updateInputLastname: (state, action) => {
      state.lastName = action.payload;
    },
    cancelEdit: (state, action) => {
      return initialState;
    },
  },
});

export const { enableEdit, updateInputFirstname, updateInputLastname, cancelEdit } = editNameInputSlice.actions;
export default editNameInputSlice.reducer;
