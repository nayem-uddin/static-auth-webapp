import { Alert } from "@mui/material";

export default function Confirmation({ response }) {
  if (!("type" in response)) {
    return;
  }
  return <Alert severity={response.type}>{response.message}</Alert>;
}
