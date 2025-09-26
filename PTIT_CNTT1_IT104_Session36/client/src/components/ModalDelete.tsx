import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/useCustomerRedux";
import { closeModalDelete } from "../slices/deleteTaskSlice";
import { Close, InfoOutlined } from "@mui/icons-material";
import { deleteTask } from "../apis/task.api";

export default function ModalDelete() {
  const modalDelete = useAppSelector((state) => state.taskDelete);
  const dispatch = useAppDispatch();
  console.log(modalDelete);

  const onClose = () => {
    dispatch(closeModalDelete());
  };

  const onConfirm = () => {
    if (modalDelete.taskDelete?.id) {
      dispatch(deleteTask(modalDelete.taskDelete.id));
    }
    onClose();
  };

  return (
    <Dialog
      open={modalDelete.isModalDeleteOpen}
      onClose={onClose}
      maxWidth="xs"
      PaperProps={{
        sx: { borderRadius: 3, px: 2, py: 1.5, position: "relative" },
      }}
    >
      {/* Close icon */}
      <IconButton
        onClick={onClose}
        sx={{ position: "absolute", right: 10, top: 10, color: "#888" }}
      >
        <Close />
      </IconButton>

      {/* Title */}
      <DialogTitle sx={{ fontWeight: 700, pb: 1, pr: 5 }}>Xác nhận</DialogTitle>

      <DialogContent sx={{ display: "flex", alignItems: "flex-start", pt: 0 }}>
        <InfoOutlined color="error" sx={{ fontSize: 36, mt: "2px", mr: 2 }} />
        <Typography variant="body1">
          Bạn có chắc chắn muốn xóa công việc{" "}
          <b>&lt;{modalDelete.taskDelete?.taskName}&gt;</b> không?
        </Typography>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "flex-end", pt: 1 }}>
        <Button onClick={onClose} variant="outlined">
          Hủy
        </Button>
        <Button
          onClick={onConfirm}
          variant="contained"
          color="error"
          sx={{ ml: 1 }}
        >
          Xóa
        </Button>
      </DialogActions>
    </Dialog>
  );
}
