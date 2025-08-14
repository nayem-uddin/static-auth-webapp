import { Box, Paper } from "@mui/material";

export default function FieldsetLayout({ children }) {
  return (
    <Paper>
      <fieldset
        className="border border-secondary-subtle rounded shadow m-auto"
        style={{
          maxWidth: "375px",
          padding: "30px 30px",
        }}
      >
        {children}
      </fieldset>
    </Paper>
  );
}
