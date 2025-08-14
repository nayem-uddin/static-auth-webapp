"use client";
import {
  ListItem,
  ToggleButtonGroup,
  ToggleButton,
  useColorScheme,
  Box,
} from "@mui/material";
export default function ThemeSwitch() {
  const { mode, setMode } = useColorScheme();
  function handleTheme(e, v) {
    setMode(v);
  }
  return (
    <Box>
      <p>Theme</p>
      <ToggleButtonGroup value={mode} onChange={handleTheme} exclusive>
        <ToggleButton value="light">Light</ToggleButton>
        <ToggleButton value="dark">Dark</ToggleButton>
        <ToggleButton value="system">System</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
