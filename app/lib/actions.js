"use server";

import { redirect, RedirectType } from "next/navigation";
import { postRequest } from "./requests";
import { extractedLoginDetails, extractedSignupDetails } from "./utils";
import { cookies } from "next/headers";

export async function signup(prevState, formData) {
  const userDetails = extractedSignupDetails(formData);
  const { res, data } = await postRequest("newuser", userDetails);
  if (!res.ok) {
    return { success: false, message: data.error };
  }
  redirect("/login", RedirectType.push);
}

export async function login(prevState, formData) {
  const userDetails = extractedLoginDetails(formData);
  const { res, data } = await postRequest("existinguser", userDetails);
  if (!res.ok) {
    return { success: false, message: data.error };
  }
  const cookieStore = await cookies();
  cookieStore.set("token", data.token, { secure: true });
  cookieStore.set("username", userDetails.username);
  redirect("/dashboard", RedirectType.push);
}

export async function signout() {
  const cookieStore = await cookies();
  cookieStore.delete("token");
  redirect("/login", RedirectType.push);
}
