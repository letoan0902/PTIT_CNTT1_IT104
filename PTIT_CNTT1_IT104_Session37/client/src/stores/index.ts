import { configureStore } from "@reduxjs/toolkit";
import studentManagerSlice from "../slices/studentManagerSlice";
import modalAddManager from "../slices/modalAddManager";
import modalEditSlice from "../slices/modalEditSlice";
import filtersStudent from "../slices/filtersStudent";

export const store = configureStore({
  reducer: {
    students: studentManagerSlice,
    modalAdd: modalAddManager,
    modalEdit: modalEditSlice,
    filter: filtersStudent,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
