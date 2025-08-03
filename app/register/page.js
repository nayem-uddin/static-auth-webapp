import { TextField } from "@mui/material";
import { Signup } from "../ui/buttons";
import { appBarAuthMenus } from "../lib/links";
import { merriweather } from "../ui/fonts";
import Link from "next/link";

export default function Page() {
  const { href, title } = appBarAuthMenus[0];
  return (
    <form>
      <fieldset
        className="border border-secondary-subtle rounded shadow bg-white m-auto"
        style={{
          maxWidth: "450px",
          padding: "20px 40px",
        }}
      >
        <legend className={`text-center ${merriweather.className} mb-3`}>
          Signup
        </legend>
        {["First name", "Last name"].map((field) => (
          <TextField
            key={field}
            label={field}
            variant="outlined"
            fullWidth
            className="mb-2"
          />
        ))}
        <TextField
          type="email"
          label="Email"
          variant="outlined"
          fullWidth
          className="mb-2"
          required
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          fullWidth
          className="mb-2"
          required
        />
        <Signup />
        <button type="button" className="btn btn-link form-control">
          <Link href={href}>{title}</Link>
        </button>
      </fieldset>
    </form>
  );
}
