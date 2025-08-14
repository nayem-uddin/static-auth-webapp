import { dashboardLink } from "@/app/lib/links";
import { Dashboard } from "@mui/icons-material";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
} from "@mui/material";

export default function DashboardNav() {
  const { href, title } = dashboardLink;
  return (
    <ListItemButton href={href}>
      <ListItemIcon>
        <Dashboard />
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItemButton>
  );
}
