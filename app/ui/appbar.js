import { AppBar, Container, Toolbar } from "@mui/material";
import SmallScreen from "./appbar/smallScreen";
import MedAndAbove from "./appbar/medAndAbove";
import OtherMenus from "./appbar/otherMenus";
export default function Appbar({ isLoggedIn }) {
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SmallScreen isLoggedIn={isLoggedIn} />
          <OtherMenus />
          <MedAndAbove isLoggedIn={isLoggedIn} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
