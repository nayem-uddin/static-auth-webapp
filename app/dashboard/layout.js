"use client";
import { AppProvider, DashboardLayout, SignOutButton } from "@toolpad/core";
import { dashboardMenus } from "../lib/links";
import { Home } from "@mui/icons-material";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
export default function Layout({ children }) {
  return (
    <AppProvider
      navigation={dashboardMenus}
      branding={{
        title: "Demo",
        homeUrl: "/",
        logo: <Home />,
      }}
    >
      <title>Dashboard</title>
      <DashboardLayout
        slots={{
          sidebarFooter: SignOutButton,
        }}
      >
        <div className="m-5">{children}</div>
      </DashboardLayout>
    </AppProvider>
  );
}
