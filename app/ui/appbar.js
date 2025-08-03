"use client";
import { AppBar, Container, Toolbar } from "@mui/material";
import SmallScreen from "./appbar/smallScreen";
import MedAndAbove from "./appbar/medAndAbove";
import OtherMenus from "./appbar/otherMenus";
export default function Appbar() {
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SmallScreen />
          <OtherMenus />
          <MedAndAbove />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
