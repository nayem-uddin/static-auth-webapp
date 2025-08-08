"use client";
import { Box, ListItemButton, Menu, MenuItem } from "@mui/material";
import { LogoutButton, UserMenusButton } from "../buttons";
import { dashboardLink } from "@/app/lib/links";
import { useState } from "react";
import { Dashboard } from "@mui/icons-material";
export default function UserMenus({ isLoggedIn }) {
  const [anchorEl, setAnchorEl] = useState(null);
  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
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
        <MenuItem disableGutters>
          <ListItemButton href={dashboardLink.href}>
            <Dashboard />
            &nbsp;{dashboardLink.title}
          </ListItemButton>
        </MenuItem>
        <MenuItem>
          <LogoutButton />
        </MenuItem>
      </Menu>
    </Box>
  );
}
