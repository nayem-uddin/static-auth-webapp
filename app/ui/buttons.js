import { AccountCircle, ArrowRightAlt, Logout } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { SignOutButton } from "@toolpad/core";
import Link from "next/link";
import { signout } from "../lib/actions";

export function Login({ isDisabled }) {
  return (
    <Button
      type="submit"
      variant="contained"
      fullWidth
      disabled={isDisabled}
      aria-label="login"
      className="mt-2"
    >
      Sign in
    </Button>
  );
}

export function Signup({ isDisabled }) {
  return (
    <Button
      type="submit"
      variant="contained"
      fullWidth
      disabled={isDisabled}
      aria-label="signup"
    >
      register
    </Button>
  );
}

export function PassChangeRequest() {
  return (
    <Button
      type="submit"
      variant="outlined"
      fullWidth
      endIcon={<ArrowRightAlt />}
      className="mt-3"
      aria-label="password recovery"
      sx={{ borderColor: "black", color: "black" }}
    >
      Continue
    </Button>
  );
}

export function UpdatePass() {
  return (
    <Button
      type="submit"
      variant="outlined"
      fullWidth
      aria-label="password change"
    >
      Update
    </Button>
  );
}

export function Redirect({ redirectObj }) {
  const { href, title } = redirectObj;
  return (
    <button type="button" className="btn btn-link form-control">
      <Link href={href}>{title}</Link>
    </button>
  );
}

export function SignOut() {
  return <SignOutButton disabled={false} onClick={signout} color="error" />;
}

export function UserMenusButton({ handleMenu }) {
  return (
    <IconButton onClick={handleMenu} sx={{ color: "white" }}>
      <AccountCircle fontSize="large" />
    </IconButton>
  );
}

export function LogoutButton() {
  return (
    <button onClick={signout} className="btn btn-outline-danger btn-sm w-100">
      <Logout /> Log out
    </button>
  );
}
