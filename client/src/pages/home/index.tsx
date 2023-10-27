import React, { useState } from "react";
import { Box, Container, Grid } from "@mui/material";

import MenuItem from "@mui/material/MenuItem";

import Typography from "@mui/material/Typography";

import BasicSelect from "../../components/basic-select";
import ActionAreaCard from "../../components/basic-card";


import RangeSlider from "../../components/price-filter";


import Preloader from "../../components/preloader";

import {products} from "../../data/db";

import { Content, FilterLabel, Main, SecondLine, TopLine } from "./components";


interface IProduct {
  id: string,
  text: string,
  subtext: string,
  imgSrc: string,
  price: number,
  rating: number,
  discount: number
}

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [value, setValue] = useState(products);
  const [isLoading, setIsloading] = useState(false);


  console.log("value ", value);
  console.log("search ", search);

  if (isLoading) return <Preloader />;

  return (
    <Container maxWidth="lg">
      <Grid container columnSpacing={3}>
        <Grid item xs={2.5}>
          <Box
            display="flex"
            flexDirection="column"
            mt={12}
          >
            <Typography variant="h4" mb={1}>
              Price Range Selected
            </Typography>
            <RangeSlider
              setSearch={setSearch}
            />
          </Box>
        </Grid>
        <Grid item xs={9.5}>
          <Main>
            <TopLine>
              <Box sx={{ marginRight: "16px" }}>
                <BasicSelect>
                  <MenuItem value={10}>Useless first</MenuItem>
                  <MenuItem value={20}>Useless first</MenuItem>
                  <MenuItem value={30}>Useless first</MenuItem>
                </BasicSelect>
              </Box>
              <Box sx={{ marginRight: "16px" }}>
                <BasicSelect label="Condition">
                  <MenuItem value={10}>Useless first</MenuItem>
                  <MenuItem value={20}>Useless first</MenuItem>
                  <MenuItem value={30}>Useless first</MenuItem>
                </BasicSelect>
              </Box>
              <Box sx={{ marginRight: "16px" }}>
                <BasicSelect label="Delivery options">
                  <MenuItem value={10}>Useless first</MenuItem>
                  <MenuItem value={20}>Useless first</MenuItem>
                  <MenuItem value={30}>Useless first</MenuItem>
                </BasicSelect>
              </Box>
            </TopLine>
            <SecondLine>
              <Box sx={{ marginRight: "8px" }}>Related</Box>
              <FilterLabel>worldwide shipping</FilterLabel>
              <FilterLabel>under $50</FilterLabel>
              <FilterLabel>kitten</FilterLabel>
              <FilterLabel>plastic plugs</FilterLabel>
            </SecondLine>
            <Content>
              <Grid container spacing={2}>
                {
                  value && (value as IProduct[]).map((doc ) => (
                    <Grid
                      key={doc.id}
                      item sm={3}>
                      <ActionAreaCard
                        {...doc}
                      />
                    </Grid>
                  ))
                }

              </Grid>
            </Content>
          </Main>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
