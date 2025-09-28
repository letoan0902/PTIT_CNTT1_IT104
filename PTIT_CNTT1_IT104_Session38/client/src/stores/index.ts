import { configureStore } from "@reduxjs/toolkit";
import bookManagerSlice from "../slices/bookManagerSlice";
import modalAddManager from "../slices/modalAddManager";
import modalDeleteManager from "../slices/modalDeleteManager";
import modalEditManager from "../slices/modalEditManager";
import filterBook from "../slices/filterBook";

export const store = configureStore({
  reducer: {
    books: bookManagerSlice,
    modalAdd: modalAddManager,
    modalDelete: modalDeleteManager,
    modalEdit: modalEditManager,
    filterBook: filterBook,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
