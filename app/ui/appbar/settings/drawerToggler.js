import { Settings, SettingsApplications } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

export default function Toggler({ toggleMenu }) {
  return (
    <Tooltip
      title="Settings"
      slotProps={{
        popper: {
          modifiers: [{ name: "offset", options: { offset: [10, 0] } }],
        },
      }}
    >
      <button className="btn text-light" onClick={toggleMenu}>
        <Settings />
      </button>
    </Tooltip>
  );
}
