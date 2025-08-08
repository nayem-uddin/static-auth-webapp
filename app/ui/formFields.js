import { TextField } from "@mui/material";
import { merriweather } from "./fonts";

export function Legend({ heading }) {
  return (
    <legend className={`text-center ${merriweather.className} mb-5`}>
      {heading}
    </legend>
  );
}

export function Username({ variant }) {
  return (
    <TextField
      label="Username"
      name="username"
      variant={variant}
      fullWidth
      className="mb-2"
      required
    />
  );
}

export function Password({ variant }) {
  return (
    <TextField
      type="password"
      label="Password"
      name="password"
      variant={variant}
      fullWidth
      className="mb-2"
      required
    />
  );
}

export function Email({ variant }) {
  return (
    <TextField
      type="email"
      label="Email"
      name="email"
      variant={variant}
      fullWidth
      className="mb-2"
      required
    />
  );
}
