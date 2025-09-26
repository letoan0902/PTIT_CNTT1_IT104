import { createSlice } from "@reduxjs/toolkit";

type StateType = {
  name: string;
  grade: string;
  sort: string;
};

const initialState: StateType = {
  name: "",
  grade: "all",
  sort: "az",
};

const filtersStudent = createSlice({
  name: "filterStudent",
  initialState,
  reducers: {
    searchName(state, action) {
      state.name = action.payload;
    },
    searchGrade(state, action) {
      state.grade = action.payload;
    },
    searchSort(state, action) {
      state.sort = action.payload;
    },
    resetFilter(state) {
      state.name = "";
      state.grade = "all";
      state.sort = "az";
    },
  },
});

export default filtersStudent.reducer;
export const { searchName, searchGrade, searchSort, resetFilter } =
  filtersStudent.actions;
