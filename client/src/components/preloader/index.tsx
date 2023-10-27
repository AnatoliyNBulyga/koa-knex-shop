import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

import { Container } from "./components";

export default function Preloader() {
  return (
    <Container>
      <CircularProgress color="secondary" />
    </Container>
  );
}