import { createSlice } from "@reduxjs/toolkit";

type StateType = {
  inputSearch: string;
  category: string;
  sort: string;
};

const initialState: StateType = {
  inputSearch: "",
  category: "All",
  sort: "az",
};

const filterBook = createSlice({
  name: "filterBook",
  initialState,
  reducers: {
    searchName(state, action) {
      state.inputSearch = action.payload;
    },
    searchCategory(state, action) {
      state.category = action.payload;
    },
    searchSort(state, action) {
      state.sort = action.payload;
    },
    resetSearch(state) {
      state.inputSearch = "";
      state.category = "All";
      state.sort = "az";
    },
  },
});

export default filterBook.reducer;
export const { searchName, searchCategory, searchSort, resetSearch } =
  filterBook.actions;
