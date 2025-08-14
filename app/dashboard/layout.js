"use client";
import { AppProvider, DashboardLayout } from "@toolpad/core";
import { dashboardMenus } from "../lib/links";
import { Home } from "@mui/icons-material";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { SignOut } from "../ui/buttons";
import { theme } from "../lib/constants";
import SiteName from "../ui/appbar/siteName";
import PageSettings from "../ui/appbar/settings";
export default function Layout({ children }) {
  return (
    <AppProvider theme={theme} navigation={dashboardMenus}>
      <title>Dashboard</title>
      <DashboardLayout
        slots={{
          sidebarFooter: SignOut,
          appTitle: SiteName,
          toolbarActions: PageSettings,
        }}
      >
        <div className="m-5">{children}</div>
      </DashboardLayout>
    </AppProvider>
  );
}
