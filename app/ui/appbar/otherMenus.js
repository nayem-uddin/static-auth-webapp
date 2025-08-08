import { dashboardLink, homeLink } from "@/app/lib/links";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SiteName from "./siteName";
export default function OtherMenus() {
  return (
    <Box
      sx={{ display: { xs: "none", md: "flex" }, ml: 4, alignItems: "center" }}
    >
      <SiteName />
      <Link
        href={homeLink.href}
        className="ms-4 text-decoration-none link-light link-opacity-50-hover"
      >
        <Typography>{homeLink.title}</Typography>
      </Link>
    </Box>
  );
}
