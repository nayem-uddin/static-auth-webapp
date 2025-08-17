"use client";

import { resetPassword } from "@/app/lib/actions";
import { initialAuthState } from "@/app/lib/constants";
import { useActionState } from "react";
import VerifyAndReset from "./verifyAndReset";
import Prompt from "../promptMessage";
import { usePopupView } from "@/app/lib/customStateHooks";
import { useEffect } from "react";
import { Suspense } from "react";

export default function WholeForm() {
  const [state, formAction, isPending] = useActionState(
    resetPassword,
    initialAuthState,
  );
  const [open, setOpen] = usePopupView();
  function handleClose() {
    setOpen(false);
  }
  useEffect(() => {
    setOpen(!state.success);
  }, [state]);
  return (
    <Suspense>
      <form action={formAction}>
        <VerifyAndReset isPending={isPending} />
        <Prompt open={open} handleClose={handleClose} message={state.message} />
      </form>
    </Suspense>
  );
}
