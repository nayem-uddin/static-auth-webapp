import { appBarAuthMenus } from "@/app/lib/links";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

export default function AuthMenus() {
  return (
    <Box sx={{ width: 250 }}>
      <List>
        {appBarAuthMenus.map((menu) => (
          <ListItem key={menu.title} disablePadding>
            <ListItemButton href={menu.href}>
              <ListItemText primary={menu.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
