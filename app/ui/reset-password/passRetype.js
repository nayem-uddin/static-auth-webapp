"use client";
import { useVisibility } from "@/app/lib/customStateHooks";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { ToggleVisibility } from "../formFields";

export default function PasswordReType() {
  const params = useSearchParams();
  const password = params.get("password");
  const [value, setValue] = useState("");
  const [isFocused, setFocus] = useState(false);
  const props = useVisibility();
  const mismatch = isFocused && value !== password;
  return (
    <FormControl error={mismatch} fullWidth required>
      <InputLabel>Confirm new password</InputLabel>
      <OutlinedInput
        label="Confirm new password"
        type={props.visible ? "text" : "password"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        endAdornment={<ToggleVisibility {...props} />}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {mismatch && <FormHelperText>Password mismatch found</FormHelperText>}
    </FormControl>
  );
}
