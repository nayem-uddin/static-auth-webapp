"use client";
import { SignInPage } from "@toolpad/core";
import Title from "../ui/forgot-password/title";
import Subtitle from "../ui/forgot-password/subtitle";
import { PassChangeRequest } from "../ui/buttons";

export default function Page() {
  const providers = [{ id: "nodemailer", name: "Email" }];
  return (
    <div>
      <SignInPage
        providers={providers}
        slots={{
          title: Title,
          subtitle: Subtitle,
          submitButton: PassChangeRequest,
        }}
      />
    </div>
  );
}
