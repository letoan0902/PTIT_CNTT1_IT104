import { Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  Chip,
  CircularProgress,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/useCustomerRedux";
import { useEffect } from "react";
import { getAllTask } from "../apis/task.api";
import type { Task } from "../interface/task.interface";
import { openModalDelete } from "../slices/deleteTaskSlice";
import { setTaskEdit } from "../slices/editTaskSlice";

export default function TaskList() {
  const tasks = useAppSelector((state) => state.task);
  const filter = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllTask());
  }, [dispatch]);

  const filteredTasks = tasks.data.filter((task) => {
    if (filter.status === "Hoàn thành" && !task.completed) return false;
    if (filter.status === "Chưa xong" && task.completed) return false;
    if (filter.priority === "Cao" && task.priority !== "high") return false;
    if (filter.priority === "Trung bình" && task.priority !== "medium")
      return false;
    if (filter.priority === "Thấp" && task.priority !== "low") return false;
    if (
      filter.searchText &&
      !task.taskName.toLowerCase().includes(filter.searchText.toLowerCase())
    )
      return false;

    return true;
  });

  if (tasks.status === "pending") {
    return (
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          bgcolor: "rgba(0,0,0,0.6)",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress size={50} thickness={5} />
      </Box>
    );
  }

  const handleOpenModalDelete = (task: Task) => {
    dispatch(openModalDelete(task));
  };

  const handleEdit = (task: Task) => {
    dispatch(setTaskEdit(task));
  };

  return (
    <Stack spacing={2}>
      {filteredTasks.length === 0 ? (
        <Paper
          elevation={1}
          sx={{
            borderRadius: 3,
            p: 3,
            textAlign: "center",
          }}
        >
          <Typography color="text.secondary">
            Không tìm thấy task nào phù hợp với bộ lọc
          </Typography>
        </Paper>
      ) : (
        filteredTasks.map((task) => (
          <Paper
            key={task.id}
            elevation={1}
            sx={{
              borderRadius: 3,
              p: 2,
              display: "flex",
              alignItems: "center",
              gap: 2,
              opacity: task.completed ? "0.6" : "",
            }}
          >
            <Checkbox checked={task.completed} />
            <Typography
              sx={{
                flex: 1,
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.taskName}
            </Typography>

            {task.priority === "high" ? (
              <Chip label="HIGH" color="error" sx={{ fontWeight: 600 }} />
            ) : task.priority === "medium" ? (
              <Chip label="MEDIUM" color="warning" sx={{ fontWeight: 600 }} />
            ) : (
              <Chip label="LOW" color="default" sx={{ fontWeight: 600 }} />
            )}

            <IconButton
              color="error"
              onClick={() => handleOpenModalDelete(task)}
            >
              <Delete />
            </IconButton>
            <IconButton color="primary" onClick={() => handleEdit(task)}>
              <Edit />
            </IconButton>
          </Paper>
        ))
      )}
    </Stack>
  );
}
