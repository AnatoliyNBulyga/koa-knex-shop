import { styled } from "@mui/material/styles";

export const NavbarHeader = styled("header")`
  padding-top: 28px;
  padding-bottom: 28px;
`;
export const NavbarInputWrap = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  background-color: #ededf0;
  width: 100%;
  padding: 0.5rem;
  border-radius: 99px;
  overflow: hidden;
  height: 32px;
`;

export const NavbarInput = styled("input")(
  ({ theme }) => `
    width: 100%;
    background-color: #EDEDF0;
    font-size: ${theme.typography.h4.fontSize};
    padding-left: 0.75rem;
    outline: none;
    border: none;
    color: #19191D;
  `,
);

export const SearchButton = styled("button")`
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const ButtonCount = styled("div")`
  position: absolute;
  top: -10px;
  right: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #f44336;
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  color: white;
`;
