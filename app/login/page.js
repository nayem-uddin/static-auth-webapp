"use client";
import { SignInPage } from "@toolpad/core";
import Title from "../ui/login/title";
import ForgotPassword from "../ui/login/forgotPassword";
import { Login } from "../ui/buttons";
import SignupLink from "../ui/login/signupLink";

export default function Page() {
  const providers = [{ id: "credentials", name: "Email and Password" }];
  return (
    <div>
      <SignInPage
        slots={{
          title: Title,
          forgotPasswordLink: ForgotPassword,
          submitButton: Login,
          signUpLink: SignupLink,
        }}
        slotProps={{
          emailField: { variant: "standard", autoFocus: false },
          passwordField: { variant: "standard" },
        }}
        providers={providers}
      />
    </div>
  );
}
