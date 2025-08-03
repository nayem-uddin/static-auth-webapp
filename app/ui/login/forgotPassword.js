import { Typography, Link } from "@mui/material";
import { passRecovery } from "@/app/lib/links";
export default function ForgotPassword() {
  return (
    <Link href={passRecovery.href} variant="body2">
      <Typography variant="body2">{passRecovery.title}</Typography>
    </Link>
  );
}
