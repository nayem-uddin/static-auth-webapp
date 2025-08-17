"use client";
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { ToggleVisibility } from "../formFields";
import { useVisibility } from "@/app/lib/customStateHooks";

export default function SetNewPassword({ handleChange }) {
  const props = useVisibility();
  return (
    <FormControl fullWidth required>
      <InputLabel>Type new password</InputLabel>
      <OutlinedInput
        label="Type new password"
        type={props.visible ? "text" : "password"}
        endAdornment={<ToggleVisibility {...props} />}
        onChange={handleChange}
        name="password"
        className="mb-2"
      />
    </FormControl>
  );
}
