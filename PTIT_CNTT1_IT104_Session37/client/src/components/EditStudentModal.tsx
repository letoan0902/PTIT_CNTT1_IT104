import { useState, useEffect } from "react";
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
import { closeModalEdit } from "../slices/modalEditSlice";
import type { Student } from "../interface/student.interface";
import { editStudent } from "../apis/student.api";

export default function EditStudentModal() {
  const studentEdit = useAppSelector((state) => state.modalEdit);
  const dispatch = useAppDispatch();
  const [isNameError, setIsNameError] = useState<boolean>(false);
  const [isAgeError, setIsAgeError] = useState<boolean>(false);
  const [isGradeError, setIsGradeError] = useState<boolean>(false);

  const [form, setForm] = useState({
    name: "",
    age: "",
    grade: "",
  });

  useEffect(() => {
    if (studentEdit.studentEdit) {
      setForm({
        name: studentEdit.studentEdit.name || "",
        age: studentEdit.studentEdit.age
          ? String(studentEdit.studentEdit.age)
          : "",
        grade: studentEdit.studentEdit.grade || "",
      });
    }
  }, [studentEdit.studentEdit, studentEdit.isModalEditOpen]);

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
    dispatch(closeModalEdit());
  };

  const handleUpdate = () => {
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

    const updateStudent: Student = {
      id: studentEdit.studentEdit?.id,
      name: form.name,
      age: Number(form.age),
      grade: form.grade,
    };

    console.log(updateStudent);

    dispatch(editStudent(updateStudent));

    handleCancel();
  };

  return (
    <Dialog
      open={studentEdit.isModalEditOpen}
      onClose={handleCancel}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle sx={{ fontSize: 28, fontWeight: 500, pb: 0 }}>
        Edit Student
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
          onClick={handleUpdate}
          sx={{
            fontSize: 16,
            bgcolor: "#1864ab",
            px: 4,
            borderRadius: 2,
            fontWeight: 600,
          }}
        >
          SAVE
        </Button>
      </DialogActions>
    </Dialog>
  );
}
