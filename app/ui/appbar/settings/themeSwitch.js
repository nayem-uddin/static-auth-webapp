"use client";
import {
  ListItem,
  ToggleButtonGroup,
  ToggleButton,
  useColorScheme,
  Box,
} from "@mui/material";
import clsx from "clsx";
import { usePathname } from "next/navigation";
export default function ThemeSwitch() {
  const pathname = usePathname();
  const { mode, setMode } = useColorScheme();
  function handleTheme(e, v) {
    setMode(v);
  }
  return (
    <Box>
      <p
        className={clsx({
          "mt-5": pathname.includes("/dashboard"),
        })}
      >
        Theme
      </p>
      <ToggleButtonGroup value={mode} onChange={handleTheme} exclusive>
        <ToggleButton value="light">Light</ToggleButton>
        <ToggleButton value="dark">Dark</ToggleButton>
        <ToggleButton value="system">System</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}
