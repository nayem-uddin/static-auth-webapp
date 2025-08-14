"use client";
import { Box, Menu } from "@mui/material";
import { UserMenusButton } from "../buttons";
import { useState } from "react";
import DashboardNav from "./userMenus/dashboardNav";
import SettingsMenu from "./userMenus/settingsMenu";
import LogoutMenu from "./userMenus/logoutMenu";
import DrawerContainer from "./settings/drawerContainer";
import { useOpenState } from "@/app/lib/customStateHooks";
export default function UserMenus({ isLoggedIn }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useOpenState();
  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
    setOpen(false);
  }
  function toggleDrawer() {
    setOpen(!open);
    setAnchorEl(null);
  }
  if (!isLoggedIn) {
    return;
  }
  return (
    <Box>
      <UserMenusButton handleMenu={handleMenu} />
      <Menu
        sx={{ mt: 5 }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <DashboardNav />
        <SettingsMenu toggleMenu={toggleDrawer} />
        <LogoutMenu />
      </Menu>
      <DrawerContainer open={open} closeDrawer={handleClose} />
    </Box>
  );
}
