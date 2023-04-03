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

export default function CStar({ width, height, ...restProps }) {
  return (
    <StyledRating
      name="customized-color"
      defaultValue={2}
      icon={<YellowStarIcon width={width} height={height} />}
      emptyIcon={<GrayStarIcon width={width} height={height} />}
      {...restProps}
    />
  );
}
