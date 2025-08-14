import { AppBar, Box, Container, Toolbar } from "@mui/material";
import SiteName from "./appbar/siteName";
import PortalMenus from "./appbar/portalMenus";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PageSettings from "./appbar/settings";
import { cookies } from "next/headers";
import UserMenus from "./appbar/userMenus";
export default async function Appbar() {
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.has("token");
  return (
    <AppBar color="transparent" enableColorOnDark>
      <Container maxWidth="xl">
        <Toolbar disableGutters className="d-flex justify-content-between">
          <SiteName />
          <Box sx={{ display: "flex" }}>
            <PortalMenus isLoggedIn={isLoggedIn} />
            <PageSettings isLoggedIn={isLoggedIn} />
            <UserMenus isLoggedIn={isLoggedIn} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
