import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../hooks/useCustomerRedux";
import { useEffect } from "react";
import { deleteStudent, getAllStudent } from "../apis/student.api";
import Loading from "./Loading";
import { openModalEdit } from "../slices/modalEditSlice";
import type { Student } from "../interface/student.interface";

export default function StudentList() {
  const studentData = useAppSelector((state) => state.students);
  const filterStudent = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const getFilteredStudents = () => {
    let filtered = [...studentData.data];

    // Filter theo tên
    if (filterStudent.name) {
      filtered = filtered.filter((student) =>
        student.name.toLowerCase().includes(filterStudent.name.toLowerCase())
      );
    }

    // Filter theo grade
    if (filterStudent.grade && filterStudent.grade !== "all") {
      filtered = filtered.filter(
        (student) => student.grade === filterStudent.grade
      );
    }

    // Sort dữ liệu
    switch (filterStudent.sort) {
      case "az":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "ageUp":
        filtered.sort((a, b) => a.age - b.age);
        break;
      case "ageDown":
        filtered.sort((a, b) => b.age - a.age);
        break;
      default:
        break;
    }

    return filtered;
  };

  const handleDelete = (student: Student) => {
    if (window.confirm("Bạn có chắc chắn muốn xoá học sinh này?")) {
      dispatch(deleteStudent(student));
    }
  };
  const handleEdit = (student: Student) => {
    dispatch(openModalEdit(student));
  };
  useEffect(() => {
    dispatch(getAllStudent());
  }, [dispatch]);

  console.log(studentData);

  if (studentData.status === "pending") {
    return <Loading />;
  }

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
        gap: 3,
      }}
    >
      {getFilteredStudents().map((student) => (
        <Card
          sx={{
            borderRadius: 3,
            boxShadow: 2,
            minHeight: 90,
            minWidth: 390,
            px: 3,
            py: 2,
          }}
          key={student.id}
        >
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              minHeight: 50,
            }}
          >
            <Box>
              <Typography variant="h5" fontWeight={700}>
                {student.name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Age: {student.age} &bull; Grade: {student.grade}
              </Typography>
            </Box>
            <Box>
              <IconButton onClick={() => handleEdit(student)}>
                <Edit />
              </IconButton>
              <IconButton onClick={() => handleDelete(student)}>
                <Delete />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
