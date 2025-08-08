import { Link, Typography } from "@mui/material";
import { archivoBlack } from "@/app/ui/fonts";

export default function SiteName() {
  return (
    <Typography
      variant="h4"
      className={`${archivoBlack.className} text-decoration-none`}
    >
      Demo
    </Typography>
  );
}
