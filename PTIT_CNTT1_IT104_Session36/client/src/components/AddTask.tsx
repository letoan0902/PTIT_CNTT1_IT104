import {
  Alert,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Snackbar,
  TextField,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/useCustomerRedux";
import { useState, useRef, useEffect } from "react";
import type { Task } from "../interface/task.interface";
import { addTask, editTask } from "../apis/task.api";
import { removeTaskEdit } from "../slices/editTaskSlice";

export default function AddTask() {
  const tasks = useAppSelector((state) => state.task);
  const taskEdit = useAppSelector((state) => state.taskEdit);

  const dispatch = useAppDispatch();
  const [inputTask, setInputTask] = useState<string>("");
  const [inputTaskError, setInputTaskError] = useState<string>("");
  const [inputPriority, setInputPriority] = useState<"high" | "medium" | "low">(
    "high"
  );
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (taskEdit.isTaskEdit) {
      setInputTask(taskEdit.taskEdit?.taskName || "");
      setInputPriority(taskEdit.taskEdit?.priority || "high");
    }
  }, [taskEdit]);

  const handleSubmit = () => {
    let error = "";
    if (inputTask === "") {
      error = "Công việc không được bỏ trống";
    } else if (
      tasks.data.some(
        (task) =>
          task.taskName.toLowerCase() === inputTask.toLowerCase() &&
          (!taskEdit.isTaskEdit ||
            task.taskName !== taskEdit.taskEdit?.taskName)
      )
    ) {
      error = "Công việc không được trùng lặp";
    }
    setInputTaskError(error);

    if (error === "") {
      if (taskEdit.isTaskEdit) {
        const updateTask: Task = {
          id: taskEdit.taskEdit?.id,
          taskName: inputTask,
          completed: taskEdit.taskEdit!.completed,
          priority: inputPriority as "high" | "medium" | "low",
        };
        dispatch(editTask(updateTask));
        dispatch(removeTaskEdit());
      } else {
        const newTask: Task = {
          taskName: inputTask,
          completed: false,
          priority: inputPriority as "high" | "medium" | "low",
        };
        dispatch(addTask(newTask));
      }
      setSnackbarOpen(true);
      setInputTask("");
      if (inputRef.current) inputRef.current.focus();
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
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
        <TextField
          inputRef={inputRef}
          error={inputTaskError !== ""}
          label={inputTaskError === "" ? "Công việc mới" : inputTaskError}
          variant="outlined"
          fullWidth
          size="small"
          sx={{ borderRadius: 2, background: "#fff" }}
          value={inputTask}
          onChange={(e) => setInputTask(e.target.value)}
        />
        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel>Ưu tiên</InputLabel>
          <Select
            label="Ưu tiên"
            defaultValue="Cao"
            value={inputPriority}
            onChange={(e) =>
              setInputPriority(e.target.value as "high" | "medium" | "low")
            }
          >
            <MenuItem value="high">Cao</MenuItem>
            <MenuItem value="medium">Trung bình</MenuItem>
            <MenuItem value="low">Thấp</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          sx={{
            borderRadius: 2,
            px: 0,
            fontWeight: 600,
            boxShadow: 2,
            width: 300,
          }}
          onClick={handleSubmit}
        >
          {taskEdit.isTaskEdit ? "Cập nhật" : "Thêm mới"}
        </Button>
      </Paper>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2500}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Thành công! Công việc đã được{" "}
          {taskEdit.isTaskEdit ? "cập nhật" : "thêm mới"}.
        </Alert>
      </Snackbar>
    </>
  );
}
