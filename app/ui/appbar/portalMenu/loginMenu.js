import { Login } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

export default function LoginMenu() {
  return (
    <ListItemButton href="/login">
      <ListItemIcon>
        <Login />
      </ListItemIcon>
      <ListItemText primary="Login" />
    </ListItemButton>
  );
}
