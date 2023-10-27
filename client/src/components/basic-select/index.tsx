import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { CFormControl } from "./components";

interface BasicSelectProps {
  children: React.ReactNode;
  label?: string;
}
export default function BasicSelect({
  children,
  label = "SORT BY",
}: BasicSelectProps) {
  const [value, setValue] = React.useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <CFormControl>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        label={label}
        onChange={handleChange}
        autoWidth
        sx={{
          "& .MuiSelect-select": {
            padding: "6px 12px",
          },
        }}
      >
        {children}
      </Select>
    </CFormControl>
  );
}
