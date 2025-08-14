import { createTheme } from "@mui/material";

export const apiUrl = "https://os-project-server.vercel.app/auth";
export const initialAuthState = { success: true, message: "" };
export const theme = createTheme({
  colorSchemes: {
    light: true,
    dark: true,
  },
  cssVariables: {
    colorSchemeSelector: "class",
  },
});
