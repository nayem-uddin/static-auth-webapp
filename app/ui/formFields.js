"use client";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Tooltip,
} from "@mui/material";
import { merriweather } from "./fonts";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useVisibility } from "../lib/customStateHooks";

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

export function Password({ variant, label = "Password" }) {
  const { visible, setVisibility } = useVisibility();
  const props = { visible, setVisibility };
  return (
    <FormControl variant={variant} required fullWidth>
      <InputLabel htmlFor="password">{label}</InputLabel>
      {variant === "standard" ? (
        <StandardPasswordField {...props} />
      ) : (
        <OutlinedPasswordField {...props} />
      )}
    </FormControl>
  );
}

function StandardPasswordField(props) {
  return (
    <Input
      type={props.visible ? "text" : "password"}
      name="password"
      className="mb-2"
      aria-label="password"
      endAdornment={<ToggleVisibility {...props} />}
    />
  );
}

function OutlinedPasswordField(props) {
  return (
    <OutlinedInput
      type={props.visible ? "text" : "password"}
      name="password"
      className="mb-2"
      label="password"
      aria-label="password"
      endAdornment={<ToggleVisibility {...props} />}
    />
  );
}

export function ToggleVisibility({ visible, setVisibility }) {
  const msg = `${visible ? "Hide" : "Show"} password`;
  function handleVisibility() {
    setVisibility((prev) => !prev);
  }
  return (
    <InputAdornment position="end">
      <Tooltip title={msg}>
        <IconButton aria-label={msg} onClick={handleVisibility} edge="end">
          {visible ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </Tooltip>
    </InputAdornment>
  );
}
