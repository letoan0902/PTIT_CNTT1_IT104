import { Box, Typography } from "@mui/material";
import { School } from "@mui/icons-material";

export default function Header() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
      <School sx={{ fontSize: 36, color: "#5f3dc4", mr: 1 }} />
      <Typography variant="h4" fontWeight={700}>
        Student Manager
      </Typography>
    </Box>
  );
}
