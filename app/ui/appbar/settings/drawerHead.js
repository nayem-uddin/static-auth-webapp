import { Close } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

export default function DrawerHead({ closeDrawer }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography>Settings</Typography>

      <IconButton onClick={closeDrawer}>
        <Close />
      </IconButton>
    </Box>
  );
}
