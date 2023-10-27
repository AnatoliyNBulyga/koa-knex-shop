import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";

export const CFormControl = styled(FormControl)(({ theme }) => ({
  minWidth: "150px",
  "& .MuiInputLabel-root": {
    top: "-10px",
    color: "#787885",
    fontSize: "14px",
  },
  "& .MuiInputLabel-root.MuiFormLabel-filled": {
    top: "0",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    top: "0",
  },
}));
