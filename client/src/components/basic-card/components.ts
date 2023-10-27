import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";

export const CCard = styled(Card)`
  box-shadow: none;
  &:hover {
    box-shadow: 0px 4px 8px 0px rgba(92, 107, 192, 0.20), 0px 2px 4px 0px rgba(59, 69, 123, 0.20);
  }
`;

export const CCardActionArea = styled(CardActionArea)`
  &:hover .MuiCardActionArea-focusHighlight {
    opacity: 0;
  }
`;
export const CCardFooter = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 4px;
`;
