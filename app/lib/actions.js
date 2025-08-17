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
  redirect("/login", RedirectType.replace);
}

export async function passChangeRequest(prevState, formData) {
  const email = formData.get("email");
  const { res, data } = await postRequest("send-otp", { email });
  if (!res.ok) {
    return { success: false, message: data.error };
  }
  const cookieStore = await cookies();
  cookieStore.set("email", email);
  redirect("/reset-password", RedirectType.push);
}

export async function resendOTP() {
  const email = (await cookies()).get("email").value;
  const { res } = await postRequest("send-otp", { email });
  if (res.ok) {
    return {
      type: "success",
      message: "OTP is sent. Please check your mailbox.",
    };
  }
  return { type: "error", message: "Please try again later." };
}

export async function resetPassword(prevState, formData) {
  const email = (await cookies()).get("email").value;
  const otp = formData.get("otp");
  const password = formData.get("password");
  const { res, data } = await postRequest("reset-password", {
    email,
    otp,
    newPassword: password,
  });
  if (res.ok) {
    redirect("/decide-action", RedirectType.push);
  }
  return { success: false, message: data.error };
}

export async function redirectToDashboard() {
  redirect("/dashboard", RedirectType.replace);
}
