import { createSlice } from "@reduxjs/toolkit";

type StateType = {
  isModalAddOpen: boolean;
};

const initialState: StateType = {
  isModalAddOpen: false,
};

const modalAddManager = createSlice({
  name: "modalAdd",
  initialState,
  reducers: {
    openModalAdd(state) {
      state.isModalAddOpen = true;
    },
    closeModalAdd(state) {
      state.isModalAddOpen = false;
    },
  },
});

export default modalAddManager.reducer;
export const { openModalAdd, closeModalAdd } = modalAddManager.actions;
