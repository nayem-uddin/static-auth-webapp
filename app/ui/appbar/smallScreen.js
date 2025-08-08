"use client";
import { Box, Divider, Drawer, IconButton } from "@mui/material";
import { useState } from "react";
import { Close, MenuOutlined } from "@mui/icons-material";
import AuthMenus from "./drawerMenus";
import SiteName from "./siteName";
import UserMenus from "./userMenus";
export default function SmallScreen({ isLoggedIn }) {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    setOpen(open);
  };
  return (
    <Box
      sx={{
        display: { md: "none", xs: "flex" },
        justifyContent: "space-between",
        flexGrow: 1,
      }}
    >
      <IconButton onClick={toggleDrawer(true)}>
        <MenuOutlined />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <IconButton onClick={toggleDrawer(false)}>
          <Close />
        </IconButton>
        <Divider />
        <AuthMenus isLoggedIn={isLoggedIn} />
      </Drawer>
      <SiteName />
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <UserMenus isLoggedIn={isLoggedIn} />
      </Box>
    </Box>
  );
}
