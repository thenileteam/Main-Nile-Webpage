import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
  currentElement: null,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openNavbar: (state) => {
      state.isOpen = true;
    },
    closeNavbar: (state) => {
      state.isOpen = false;
    },
    updateCurrentElement: (state, action) => {
      state.currentElement = action.payload;
    },
    setActivePage: (state, action) => {
      state.currentElement = action.payload !== 0 ? action.payload : null;
    },
  },
});

export const { openNavbar, closeNavbar, updateCurrentElement, setActivePage } =
  modalSlice.actions;
export default modalSlice.reducer;
