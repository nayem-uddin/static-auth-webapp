"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../lib/constants";
import { AppProvider } from "@toolpad/core";

export default function Wrapper({ children }) {
  return <AppProvider theme={theme}>{children}</AppProvider>;
}
