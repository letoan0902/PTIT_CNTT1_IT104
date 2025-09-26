import { Description } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

export default function HeaderTask() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      mb={3}
      spacing={1}
    >
      <Description fontSize="large" sx={{ color: "#7077ff" }} />
      <Typography variant="h4" fontWeight={700}>
        Task Manager
      </Typography>
    </Stack>
  );
}
