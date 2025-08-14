import { Collapse, List, Menu } from "@mui/material";
import LoginMenu from "./loginMenu";
import SignupMenu from "./signupMenu";

export default function Container({ open, anchorEl, handleClose }) {
  return (
    <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
      <LoginMenu />
      <SignupMenu />
    </Menu>
  );
}
