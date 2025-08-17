"use client";
import { TextField } from "@mui/material";
import FieldsetLayout from "../fieldsetLayout";
import { resendOTP } from "@/app/lib/actions";
import { useTransition } from "react";
import Confirmation from "./confirmation";
import { useState } from "react";
import PasswordReType from "./passRetype";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SetNewPassword from "./newPass";
import { Suspense } from "react";

export default function VerifyAndReset({ isPending }) {
  const [isOTPRequestPending, startTransition] = useTransition();
  const [response, setResponse] = useState({});
  const params = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  function setParams(e, param) {
    const searchParams = new URLSearchParams(params);
    searchParams.set(param, e.target.value);
    replace(`${pathname}?${searchParams.toString()}`);
  }
  return (
    <FieldsetLayout>
      <p>
        We have sent an email with an OTP to your email address. Please check
        your mailbox and put that OTP in the box below. <br />
      </p>
      <p>
        If you haven&apos;t received any OTP or your OTP is expired, click the
        <span className="fw-semibold"> Resend OTP </span>button.
      </p>
      <Confirmation response={response} />
      <TextField
        name="otp"
        fullWidth
        label="Enter your OTP"
        required
        variant="outlined"
        sx={{ mb: 1 }}
        onChange={(e) => setParams(e, "otp")}
      />
      <SetNewPassword handleChange={(e) => setParams(e, "password")} />
      <PasswordReType />
      <div className="d-flex flex-column mt-2">
        <input
          type="submit"
          value="Submit"
          className="btn btn-primary"
          disabled={isPending}
        />
        <button
          className="btn btn-link"
          onClick={(e) => {
            e.preventDefault();
            startTransition(async () => {
              const res = await resendOTP();
              setResponse(res);
            });
          }}
          formNoValidate
          disabled={isOTPRequestPending}
        >
          Resend OTP
        </button>
      </div>
    </FieldsetLayout>
  );
}
