"use client";
import { Login, Redirect } from "../ui/buttons";
import { appBarAuthMenus, passRecovery } from "../lib/links";
import Link from "next/link";
import { useEffect } from "react";
import Prompt from "../ui/promptMessage";
import { useLoginHandler, usePopupView } from "../lib/customStateHooks";
import { Legend, Password, Username } from "../ui/formFields";
import FieldsetLayout from "../ui/fieldsetLayout";
export default function Page() {
  const variant = "standard";
  const redirectObj = appBarAuthMenus[1];
  const [state, formAction, isPending] = useLoginHandler();
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
        <Legend heading="Login" />
        <Username variant={variant} />
        <Password variant={variant} />
        <Link href={passRecovery.href} className="float-end">
          {passRecovery.title}
        </Link>
        <Login isDisabled={isPending} />
        <Redirect redirectObj={redirectObj} />
        <Prompt message={state.message} open={open} handleClose={handleClose} />
      </FieldsetLayout>
    </form>
  );
}
