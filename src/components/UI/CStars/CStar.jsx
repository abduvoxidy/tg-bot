import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import { YellowStarIcon, GrayStarIcon } from "../Icons";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

export default function CStar({ ...restProps }) {
  return (
    <StyledRating
      name="customized-color"
      defaultValue={2}
      icon={<YellowStarIcon />}
      emptyIcon={<GrayStarIcon />}
      {...restProps}
    />
  );
}
