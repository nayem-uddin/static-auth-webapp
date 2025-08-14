import { PersonAdd } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
export default function SignupMenu() {
  return (
    <ListItemButton href="/register">
      <ListItemIcon>
        <PersonAdd />
      </ListItemIcon>
      <ListItemText primary="Register" />
    </ListItemButton>
  );
}
