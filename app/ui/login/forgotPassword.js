import { Typography } from "@mui/material";
import { passRecovery } from "@/app/lib/links";
import Link from "next/link";
export default function ForgotPassword() {
  return <Link href={passRecovery.href}>{passRecovery.title}</Link>;
}
