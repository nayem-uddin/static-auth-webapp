"use client";
import Toggler from "./settings/drawerToggler";
import { useOpenState } from "@/app/lib/customStateHooks";
import DrawerContainer from "./settings/drawerContainer";
import { Fragment } from "react";
export default function PageSettings({ isLoggedIn }) {
  const [open, setOpen] = useOpenState();
  function toggleMenu() {
    setOpen(true);
  }
  function closeDrawer() {
    setOpen(false);
  }
  if (isLoggedIn) {
    return;
  }
  return (
    <Fragment>
      <Toggler toggleMenu={toggleMenu} />
      <DrawerContainer open={open} closeDrawer={closeDrawer} />
    </Fragment>
  );
}
