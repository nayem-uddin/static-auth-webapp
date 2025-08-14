"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../lib/constants";

export default function Wrapper({ children }) {
  return (
    <ThemeProvider theme={theme} defaultMode="system">
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
