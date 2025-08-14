"use client";
import { Settings, SettingsApplications } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function Toggler({ toggleMenu }) {
  const pathname = usePathname();
  return (
    <Tooltip
      title="Settings"
      slotProps={{
        popper: {
          modifiers: [{ name: "offset", options: { offset: [10, 0] } }],
        },
      }}
    >
      <IconButton
        className={clsx({
          "text-reset": pathname === "/dashboard",
          "text-light": pathname !== "/dashboard",
        })}
        onClick={toggleMenu}
      >
        <Settings />
      </IconButton>
    </Tooltip>
  );
}
