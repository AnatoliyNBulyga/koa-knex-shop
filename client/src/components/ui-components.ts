import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const CButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.palette.secondary.light};
  color: ${({ theme }) => theme.palette.secondary.main};
  &:hover {
    border: 1px solid ${({ theme }) => theme.palette.secondary.main};
    background-color: ${({ theme }) => theme.palette.secondary.main};
    color: ${({ theme }) => theme.palette.secondary.contrastText};
  }
`;
export const CButtonSmall = styled(Button)`
  border: 1px solid ${({ theme }) => theme.palette.secondary.light};
  color: ${({ theme }) => theme.palette.secondary.main};
  &:hover {
    border: 1px solid ${({ theme }) => theme.palette.secondary.main};
    background-color: ${({ theme }) => theme.palette.secondary.main};
    color: ${({ theme }) => theme.palette.secondary.contrastText};
  }
  column-gap: 6px;
  padding: 4px 12px;
`;
