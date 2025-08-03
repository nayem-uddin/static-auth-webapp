import { appBarAuthMenus } from "@/app/lib/links";
import Link from "next/link";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
export default function SignupLink() {
  const { href, title } = appBarAuthMenus[1];
  return (
    <button type="button" className="btn btn-link form-control">
      <Link href={href}>{title}</Link>
    </button>
  );
}
