import { TextField } from "@mui/material";

export default function CustomEmailField() {
  return (
    <TextField
      variant="standard"
      label="Email"
      name="email"
      type="email"
      fullWidth
    />
  );
}
