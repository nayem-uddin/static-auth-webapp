import { dashboardLink, homeLink } from "@/app/lib/links";
import { Typography } from "@mui/material";
import Link from "next/link";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
export default function OtherMenus() {
  return (
    <div className="d-flex ms-4">
      {[homeLink, dashboardLink].map((page) => (
        <Link
          key={page.title}
          href={page.href}
          className="ms-4 text-decoration-none link-light link-opacity-50-hover"
        >
          <Typography>{page.title}</Typography>
        </Link>
      ))}
    </div>
  );
}
