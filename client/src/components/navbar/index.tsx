import React, { useRef } from "react";
import { Avatar, Box, Button, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

import { CButton } from "../ui-components";

import {
  ButtonCount,
  NavbarHeader,
  NavbarInput,
  NavbarInputWrap,
  SearchButton,
} from "./components";

const Navbar = () => {
  const inputRef = useRef(null);
  return (
    <Container maxWidth="lg">
      <NavbarHeader>
        <Grid container columnSpacing={3} alignItems="center">
          <Grid item xs={2.5}>
            <Link to="/">
              <Box px={2} py={2}>
                <img
                  src="/images/logo.png"
                  alt="Logo previe"
                />
              </Box>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <NavbarInputWrap>
              <SearchButton>
                <AiOutlineSearch color="#787885" size={18} />
              </SearchButton>
              <NavbarInput
                ref={inputRef}
                placeholder="Search for anything"
                type="text"
              />
              <SearchButton>
                <AiOutlineClose color="#2979FF" size={18} />
              </SearchButton>
            </NavbarInputWrap>
          </Grid>
          <Grid item xs={3.5}>
            <Grid container justifyContent="flex-end">
              <CButton variant="outlined" sx={{ position: "relative" }}>
                Watch <ButtonCount>5</ButtonCount>
              </CButton>
              <Avatar
                sx={{ marginLeft: "26px" }}
                alt="Avatar"
                src="/images/avatar.png"
              />
            </Grid>
          </Grid>
        </Grid>
      </NavbarHeader>
    </Container>
  );
};

export default Navbar;
