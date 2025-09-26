import {
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  type SelectChangeEvent,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/useCustomerRedux";
import {
  setStatusFilter,
  setPriorityFilter,
  setSearchText,
} from "../slices/filterTaskSlice";
import type { ChangeEvent } from "react";

export default function FilterSearchTask() {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.filter);

  const handleStatusChange = (event: SelectChangeEvent) => {
    dispatch(setStatusFilter(event.target.value as string));
  };

  const handlePriorityChange = (event: SelectChangeEvent) => {
    dispatch(setPriorityFilter(event.target.value as string));
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchText(event.target.value));
  };

  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: 3,
        p: 2,
        mb: 3,
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <FormControl size="small" sx={{ minWidth: 120 }}>
        <InputLabel>Trạng thái</InputLabel>
        <Select
          label="Trạng thái"
          value={filter.status}
          onChange={handleStatusChange}
        >
          <MenuItem value="Tất cả">Tất cả</MenuItem>
          <MenuItem value="Hoàn thành">Hoàn thành</MenuItem>
          <MenuItem value="Chưa xong">Chưa xong</MenuItem>
        </Select>
      </FormControl>
      <FormControl size="small" sx={{ minWidth: 120 }}>
        <InputLabel>Ưu tiên</InputLabel>
        <Select
          label="Ưu tiên"
          value={filter.priority}
          onChange={handlePriorityChange}
        >
          <MenuItem value="Tất cả">Tất cả</MenuItem>
          <MenuItem value="Cao">Cao</MenuItem>
          <MenuItem value="Trung bình">Trung bình</MenuItem>
          <MenuItem value="Thấp">Thấp</MenuItem>
        </Select>
      </FormControl>
      <TextField
        placeholder="Tìm kiếm"
        variant="outlined"
        size="small"
        value={filter.searchText}
        onChange={handleSearchChange}
        sx={{ flex: 1, borderRadius: 2, background: "#fff" }}
      />
    </Paper>
  );
}
