"use client";
import { useState, useActionState } from "react";
import { login, signup } from "./actions";
import { initialAuthState } from "./constants";
export function usePopupView() {
  const [open, setOpen] = useState(false);
  return [open, setOpen];
}

export function useLoginHandler() {
  const [state, formAction, isPending] = useActionState(
    login,
    initialAuthState
  );
  return [state, formAction, isPending];
}
export function useSignupHandler() {
  const [state, formAction, isPending] = useActionState(
    signup,
    initialAuthState
  );
  return [state, formAction, isPending];
}
export function useOpenState() {
  const [open, setOpen] = useState(false);
  return [open, setOpen];
}
