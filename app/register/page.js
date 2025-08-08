"use client";
import { TextField } from "@mui/material";
import { Redirect, Signup } from "../ui/buttons";
import { appBarAuthMenus } from "../lib/links";
import { merriweather } from "../ui/fonts";
import Link from "next/link";
import { usePopupView, useSignupHandler } from "../lib/customStateHooks";
import Prompt from "../ui/promptMessage";
import { useEffect } from "react";
import { Email, Legend, Password, Username } from "../ui/formFields";
import FieldsetLayout from "../ui/fieldsetLayout";
export default function Page() {
  const variant = "outlined";
  const redirectObj = appBarAuthMenus[0];
  const [state, formAction, isPending] = useSignupHandler();
  const [open, setOpen] = usePopupView();
  function handleClose() {
    setOpen(false);
  }
  useEffect(() => {
    setOpen(!state.success);
  }, [state]);
  return (
    <form action={formAction}>
      <FieldsetLayout>
        <Legend heading="Signup" />
        <Username variant={variant} />
        <Email variant={variant} />
        <Password variant={variant} />
        <Signup isDisabled={isPending} />
        <Redirect redirectObj={redirectObj} />
        <Prompt message={state.message} open={open} handleClose={handleClose} />
      </FieldsetLayout>
    </form>
  );
}
