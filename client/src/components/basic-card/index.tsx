import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Rating } from "@mui/material";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { CButtonSmall } from "../ui-components";

import { CCard, CCardActionArea, CCardFooter } from "./components";

interface ActionAreaCardProps {
  text: string;
  subtext: string;
  imgSrc: string;
  price: number;
  rating: number;
  isFavorite?: boolean;
  discount: number;
}

export default function ActionAreaCard({
  text,
  subtext,
  imgSrc,
  price,
  rating,
  isFavorite = false,
  discount,
}: ActionAreaCardProps) {
  return (
    <CCard sx={{ maxWidth: 258 }}>
      <CCardActionArea>
        <CardMedia
          sx={{ width: 226, p: 2 }}
          component="img"
          image={imgSrc}
          alt="Card preview"
        />

        <CardContent>
          <Typography variant="body1" sx={{ mb: 1, minHeight: 75 }}>
            {text}
          </Typography>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ mb: 1 }}
          >
            ${ price / 100}
          </Typography>
          <Typography
            display="flex"
            alignItems="center"
            minHeight="40px"
            mb={1}
            variant="body2"
            color="text.secondary"
          >
            {subtext}
          </Typography>
          <CCardFooter>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                columnGap: 0.5,
              }}
            >
              <Rating
                name="read-only"
                value={rating / 100}
                precision={0.5}
                readOnly
                sx={{
                  color: "#FB8200",
                  fontSize: "12px",
                }}
              />
              <Typography variant="body2">{rating/100}</Typography>
            </Box>

            <CButtonSmall variant="outlined">
              {
                isFavorite
                  ? <AiFillHeart size={14} />
                  : <AiOutlineHeart size={14} />
              }
              Watch
            </CButtonSmall>
          </CCardFooter>
        </CardContent>
      </CCardActionArea>
    </CCard>
  );
}
