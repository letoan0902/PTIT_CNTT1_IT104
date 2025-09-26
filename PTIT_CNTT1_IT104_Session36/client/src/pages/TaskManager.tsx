import { Box, Container } from "@mui/material";
import HeaderTask from "../components/HeaderTask";
import AddTask from "../components/AddTask";
import FilterSearchTask from "../components/FilterSearchTask";
import TaskList from "../components/TaskList";
import ModalDelete from "../components/ModalDelete";

export default function TaskManager() {
  return (
    <Box sx={{ background: "#f4f5f7", minHeight: "100vh", py: 4 }}>
      <Container maxWidth="md">
        <HeaderTask />
        <AddTask />
        <FilterSearchTask />
        <TaskList />
      </Container>
      <ModalDelete />
    </Box>
  );
}
