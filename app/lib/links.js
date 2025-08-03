import { Key, Person } from "@mui/icons-material";
import { pageLink, dashboardMenu } from "./utils";
export const appBarAuthMenus = [
  pageLink("Login", "/login"),
  pageLink("Register", "/register"),
];
export const passRecovery = pageLink("Forgot Password?", "/forgot-password");
export const dashboardMenus = [
  dashboardMenu("dashboard", "Personal Information", <Person />),
  dashboardMenu("dashboard/change-password", "Change Password", <Key />),
];
export const dashboardLink = pageLink("Dashboard", "/dashboard");
export const homeLink = pageLink("Home", "/");
