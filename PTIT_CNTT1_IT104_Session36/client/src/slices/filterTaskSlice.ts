import { createSlice } from "@reduxjs/toolkit";
import type { FilterState } from "../interface/filter.interface";

const initialState: FilterState = {
  status: "Tất cả",
  priority: "Tất cả",
  searchText: "",
};

const filterTaskSlice = createSlice({
  name: "filterTask",
  initialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
    setPriorityFilter(state, action) {
      state.priority = action.payload;
    },
    setSearchText(state, action) {
      state.searchText = action.payload;
    },
  },
});

export default filterTaskSlice.reducer;
export const { setStatusFilter, setPriorityFilter, setSearchText } =
  filterTaskSlice.actions;
