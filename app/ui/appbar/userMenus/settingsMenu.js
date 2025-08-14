import { Settings } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

export default function SettingsMenu({ toggleMenu }) {
  return (
    <ListItemButton onClick={toggleMenu}>
      <ListItemIcon>
        <Settings />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItemButton>
  );
}
