"use client";
import { AppProvider, DashboardLayout } from "@toolpad/core";
import { dashboardMenus } from "../lib/links";
import { Home } from "@mui/icons-material";

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
      <DashboardLayout>{children}</DashboardLayout>
    </AppProvider>
  );
}
