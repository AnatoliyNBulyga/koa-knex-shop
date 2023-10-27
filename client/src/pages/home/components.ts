import { styled } from "@mui/material/styles";

export const Main = styled("div")`
  border-radius: 8px;
  box-shadow:
    0px 2px 4px 0px rgba(90, 91, 106, 0.24),
    0px 1px 2px 0px rgba(58, 58, 68, 0.24);
  padding: 16px;
`;

export const TopLine = styled("div")`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const SecondLine = styled("div")`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.typography.body1.color};
  margin-bottom: 16px;
`;
export const FilterLabel = styled("div")`
  color: ${({ theme }) => theme.palette.secondary.dark};
  background-color: #ededf0;
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  padding: 6px 12px;
  border-radius: 99px;
  margin-left: 4px;
  margin-right: 4px;
`;

export const Content = styled("div")``;
