import { useEffect, useState } from "react";
import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useAppDispatch, useAppSelector } from "../hooks/useCustomerRedux";
import {
  resetFilter,
  searchGrade,
  searchName,
  searchSort,
} from "../slices/filtersStudent";

export default function SearchFilters() {
  const filterStudent = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("all");
  const [sort, setSort] = useState("az");

  console.log(filterStudent);

  // Đồng bộ dữ liệu từ store ra filter
  useEffect(() => {
    if (filterStudent) {
      setName(filterStudent.name ?? "");
      setGrade(filterStudent.grade ?? "all");
      setSort(filterStudent.sort ?? "az");
    }
  }, [filterStudent]);

  const handleClear = () => {
    dispatch(resetFilter());
  };

  return (
    <Box
      sx={{
        background: "#fff",
        p: 2,
        borderRadius: 2,
        display: "flex",
        gap: 2,
        alignItems: "center",
        mb: 3,
        boxShadow: 1,
      }}
    >
      <TextField
        placeholder="Tìm theo tên"
        size="small"
        variant="outlined"
        value={name}
        onChange={(e) => dispatch(searchName(e.target.value))}
        sx={{ flex: 2 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search color="action" />
            </InputAdornment>
          ),
        }}
      />
      <FormControl size="small" sx={{ minWidth: 120 }}>
        <InputLabel sx={{ color: "black" }}>Grade</InputLabel>
        <Select
          label="Grade"
          value={grade}
          onChange={(e) => dispatch(searchGrade(e.target.value))}
          sx={{ color: "black" }}
        >
          <MenuItem value="all">Tất cả</MenuItem>
          <MenuItem value="10A1">10A1</MenuItem>
          <MenuItem value="10A2">10A2</MenuItem>
          <MenuItem value="11B1">11B1</MenuItem>
        </Select>
      </FormControl>

      <FormControl size="small" sx={{ minWidth: 140 }}>
        <InputLabel sx={{ color: "black" }}>Sắp xếp</InputLabel>
        <Select
          label="Sắp xếp"
          value={sort}
          onChange={(e) => dispatch(searchSort(e.target.value))}
          sx={{ color: "black" }}
        >
          <MenuItem value="az">Name A → Z</MenuItem>
          <MenuItem value="za">Name Z → A</MenuItem>
          <MenuItem value="ageUp">
            Age <ArrowUpwardIcon fontSize="inherit" />
          </MenuItem>
          <MenuItem value="ageDown">
            Age <ArrowDownwardIcon fontSize="inherit" />
          </MenuItem>
        </Select>
      </FormControl>
      <Button variant="outlined" sx={{ borderRadius: 2 }} onClick={handleClear}>
        CLEAR
      </Button>
    </Box>
  );
}
