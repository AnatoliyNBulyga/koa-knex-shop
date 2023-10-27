import React from "react";
import { Box, Container } from "@mui/material";

const Footer = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8, display: "flex", justifyContent: "center" }}>
        &copy; 2023 Fake-Store, Inc. All rights reserved.
      </Box>
    </Container>
  );
};

export default Footer;