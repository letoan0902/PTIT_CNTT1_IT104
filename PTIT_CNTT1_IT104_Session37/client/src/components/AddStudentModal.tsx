import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/useCustomerRedux";
import { closeModalAdd } from "../slices/modalAddManager";
import type { Student } from "../interface/student.interface";
import { addStudent } from "../apis/student.api";

export default function AddStudentModal() {
  const [isNameError, setIsNameError] = useState<boolean>(false);
  const [isAgeError, setIsAgeError] = useState<boolean>(false);
  const [isGradeError, setIsGradeError] = useState<boolean>(false);

  const isModalAddOpen = useAppSelector(
    (state) => state.modalAdd.isModalAddOpen
  );
  const dispatch = useAppDispatch();

  const [form, setForm] = useState({
    name: "",
    age: "",
    grade: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    setForm({ name: "", age: "", grade: "" });
    setIsNameError(false);
    setIsAgeError(false);
    setIsGradeError(false);
    dispatch(closeModalAdd());
  };

  const handleAdd = () => {
    // Validate input
    let isError = false;
    if (form.name === "") {
      setIsNameError(true);
      isError = true;
    } else {
      setIsNameError(false);
    }
    if (form.age === "") {
      setIsAgeError(true);
      isError = true;
    } else {
      setIsAgeError(false);
    }
    if (form.grade === "") {
      setIsGradeError(true);
      isError = true;
    } else {
      setIsGradeError(false);
    }

    if (isError) return;

    const newStudent: Student = {
      name: form.name,
      age: Number(form.age),
      grade: form.grade,
    };
    dispatch(addStudent(newStudent));

    handleCancel();
  };

  return (
    <Dialog
      open={isModalAddOpen}
      onClose={handleCancel}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle sx={{ fontSize: 28, fontWeight: 500, pb: 0 }}>
        Add Student
      </DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={3} mt={1}>
          <TextField
            error={isNameError}
            name="name"
            label={isNameError ? "Tên không được để trống" : "Name"}
            value={form.name}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
          <TextField
            error={isAgeError}
            name="age"
            label={isAgeError ? "Tuổi không được để trống" : "Age"}
            type="number"
            value={form.age}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
          <TextField
            error={isGradeError}
            name="grade"
            label={isGradeError ? "Lớp không được để trống" : "Grade"}
            value={form.grade}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ pr: 3, pb: 2 }}>
        <Button onClick={handleCancel} color="primary" sx={{ fontSize: 16 }}>
          CANCEL
        </Button>
        <Button
          variant="contained"
          onClick={handleAdd}
          sx={{
            fontSize: 16,
            bgcolor: "#1864ab",
            px: 4,
            borderRadius: 2,
            fontWeight: 600,
          }}
        >
          ADD
        </Button>
      </DialogActions>
    </Dialog>
  );
}
