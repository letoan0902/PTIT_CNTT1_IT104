import { Box } from "@mui/material";
import Header from "./components/Header";
import SearchFilters from "./components/SearchFilters";
import StudentList from "./components/StudentList";
import AddStudentButton from "./components/AddStudentButton";
import AddStudentModal from "./components/AddStudentModal";
import EditStudentModal from "./components/EditStudentModal";

export default function App() {
  return (
    <Box sx={{ background: "#f8f9fb", minHeight: "100vh", py: 4 }}>
      <Box sx={{ maxWidth: 900, mx: "auto" }}>
        <Header />

        <AddStudentButton />
        <AddStudentModal />

        <SearchFilters />

        <StudentList />
      </Box>
      <EditStudentModal />
    </Box>
  );
}
