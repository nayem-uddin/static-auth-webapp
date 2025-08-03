"use client";
import { Box, Divider, Drawer, IconButton } from "@mui/material";
import { Fragment, useState } from "react";
import { Close, MenuOutlined } from "@mui/icons-material";
import AuthMenus from "./drawerMenus";
import SiteName from "./siteName";
export default function SmallScreen() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    setOpen(open);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        sx={{ display: { md: "none", xs: "flex" } }}
        onClick={toggleDrawer(true)}
      >
        <MenuOutlined />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <IconButton onClick={toggleDrawer(false)}>
          <Close />
        </IconButton>
        <Divider />
        <AuthMenus />
      </Drawer>
      <SiteName />
    </Box>
  );
}
