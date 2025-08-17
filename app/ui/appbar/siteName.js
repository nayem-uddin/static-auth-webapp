"use client";
import { archivoBlack } from "@/app/ui/fonts";
import { Tooltip } from "@mui/material";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteName() {
  const pathname = usePathname();
  const isOnDashboard = pathname.includes("/dashboard");
  return (
    <Tooltip
      title="Go to home"
      placement="bottom-end"
      slotProps={{
        popper: {
          modifiers: [{ name: "offset", options: { offset: [50, -14] } }],
        },
      }}
    >
      <Link
        href="/"
        className={clsx("text-decoration-none", {
          "text-reset": isOnDashboard,
          "link-light": !isOnDashboard,
        })}
      >
        <p className={`${archivoBlack.className} h2 display-6`}>Demo</p>
      </Link>
    </Tooltip>
  );
}
