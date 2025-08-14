"use client";
import Container from "./portalMenu/container";
import { useState, Fragment } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useOpenState } from "@/app/lib/customStateHooks";

export default function PortalMenus({ isLoggedIn }) {
  const [open, setOpen] = useOpenState();
  const [anchorEl, setAnchorEl] = useState(null);
  function toggleMenu(e) {
    setOpen(true);
    setAnchorEl(e.currentTarget);
  }
  function handleClose() {
    setOpen(false);
  }
  if (isLoggedIn) {
    return;
  }
  return (
    <div>
      <button className="btn text-light" onClick={toggleMenu}>
        Login/Register <ExpandMore />
      </button>
      <Container open={open} anchorEl={anchorEl} handleClose={handleClose} />
    </div>
  );
}
