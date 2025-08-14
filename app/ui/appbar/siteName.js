import { archivoBlack } from "@/app/ui/fonts";
import { Tooltip } from "@mui/material";
import Link from "next/link";

export default function SiteName() {
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
      <Link href="/" className="text-decoration-none text-light">
        <p className={`${archivoBlack.className} h2 display-6`}>Demo</p>
      </Link>
    </Tooltip>
  );
}
