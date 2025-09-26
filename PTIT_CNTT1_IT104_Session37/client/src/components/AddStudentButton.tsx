import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { openModalAdd } from "../slices/modalAddManager";

export default function AddStudentButton() {
  // TODO: Dùng Redux dispatch để mở modal
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModalAdd());
  };
  return (
    <Button
      variant="contained"
      sx={{ mb: 3, borderRadius: 2, fontWeight: 600, bgcolor: "#1864ab" }}
      onClick={handleOpenModal}
    >
      ADD STUDENT
    </Button>
  );
}
