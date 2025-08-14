import { Box, Divider, Drawer, List } from "@mui/material";
import ThemeSwitch from "./themeSwitch";
import DrawerHead from "./drawerHead";

export default function DrawerContainer({ open, closeDrawer }) {
  return (
    <Drawer open={open} onClose={closeDrawer} anchor="right">
      <Box sx={{ pl: 2 }}>
        <DrawerHead closeDrawer={closeDrawer} />
        <Divider />
        <List>
          <ThemeSwitch />
        </List>
      </Box>
    </Drawer>
  );
}
