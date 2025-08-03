import { UpdatePass } from "@/app/ui/buttons";
import { TextField } from "@mui/material";

export default function Page() {
  return (
    <div>
      <h2>Change password</h2>
      <form
        style={{ maxWidth: "450px", marginLeft: "20px", marginTop: "50px" }}
      >
        <TextField
          label="Enter old password"
          variant="filled"
          type="password"
          fullWidth
          sx={{ marginBottom: 2 }}
          required
        />
        <TextField
          label="Enter new password"
          variant="filled"
          type="password"
          fullWidth
          sx={{ marginBottom: 2 }}
          required
        />
        <UpdatePass />
      </form>
    </div>
  );
}
