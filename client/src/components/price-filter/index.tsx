import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import { useState } from "react";
import Typography from "@mui/material/Typography";

import { CSlider } from "./components";

interface RangeSliderProps {
  setSearch: (str: string) => void;
}

const initialMaxPrice = 600;

export default function RangeSlider({ setSearch }: RangeSliderProps) {

  const [value, setValue] = useState<number[]>([0, initialMaxPrice]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);

    setSearch(`?min_price=${(newValue as number[])[0]}&max_price=${(newValue as number[])[1]}`);
  };

  return (
    <Box
      sx={{ p: 2, border: "4px solid #EDEDF0" }}
      display="flex"
      flexDirection="column"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={0.5}
      >
        <Typography variant="body1">${value[0]}</Typography>
        <Typography variant="body1">${value[1]}</Typography>
      </Box>
      <CSlider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={initialMaxPrice}
        step={10}
      />
    </Box>
  );
}