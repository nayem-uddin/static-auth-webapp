"use client";
import { passChangeRequest } from "@/app/lib/actions";
import { initialAuthState } from "@/app/lib/constants";
import { useActionState, useEffect } from "react";
import { TextField } from "@mui/material";
import { UpdatePass } from "../buttons";
import Prompt from "../promptMessage";
import { usePopupView } from "@/app/lib/customStateHooks";
export default function PassChangeForm() {
  const [state, formAction, isPending] = useActionState(
    passChangeRequest,
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
    <form
      style={{ maxWidth: "450px", marginLeft: "20px", marginTop: "50px" }}
      action={formAction}
    >
      <TextField
        label="Enter your email address"
        variant="filled"
        type="email"
        name="email"
        fullWidth
        sx={{ marginBottom: 2 }}
        required
      />
      <UpdatePass isDisabled={isPending} />
      <Prompt message={state.message} open={open} handleClose={handleClose} />
    </form>
  );
}
