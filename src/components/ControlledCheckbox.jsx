import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

export function ControlledCheckbox({ checked, handleChange }) {
  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
