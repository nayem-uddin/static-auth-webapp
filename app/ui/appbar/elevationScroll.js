"use client";
import { useScrollTrigger } from "@mui/material";
import { cloneElement } from "react";
export default function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });
  return children
    ? cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
}
