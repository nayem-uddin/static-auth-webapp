import { ArrowRightAlt } from "@mui/icons-material";
import { Button } from "@mui/material";

export const Login = () => {
  return (
    <Button
      type="submit"
      variant="contained"
      fullWidth
      sx={{ marginTop: 1, marginBottom: 1 }}
    >
      Sign in
    </Button>
  );
};

export const Signup = () => {
  return (
    <Button type="submit" variant="contained" fullWidth>
      register
    </Button>
  );
};

export const PassChangeRequest = () => {
  return (
    <Button
      type="submit"
      variant="outlined"
      fullWidth
      endIcon={<ArrowRightAlt />}
      className="mt-3"
      sx={{ borderColor: "black", color: "black" }}
    >
      Continue
    </Button>
  );
};

export const UpdatePass = () => {
  return (
    <Button type="submit" variant="outlined" fullWidth>
      Update
    </Button>
  );
};
