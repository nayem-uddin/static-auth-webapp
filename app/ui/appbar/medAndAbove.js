"use client";
import { appBarAuthMenus } from "@/app/lib/links";
import { Box, ListItemButton, ListItemText } from "@mui/material";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import UserMenus from "./userMenus";
export default function MedAndAbove({ isLoggedIn }) {
  const pathname = usePathname();
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        position: "absolute",
        right: 0,
      }}
    >
      {!isLoggedIn &&
        appBarAuthMenus.map((menu) => (
          <ListItemButton
            key={menu.title}
            href={menu.href}
            className={clsx({
              "border border-secondary-subtle": pathname === menu.href,
            })}
          >
            <ListItemText primary={menu.title} />
          </ListItemButton>
        ))}
      <UserMenus isLoggedIn={isLoggedIn} />
    </Box>
  );
}
