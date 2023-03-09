import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";

const PrettoSlider = styled(Slider)({
  color: "#ff9910",
  height: 4,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    backgroundColor: "#ff9910",
    border: "none",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-rail": {
    backgroundColor: "#D5DADD;",
  },
});

export default function CustomSlider({ ...restProps }) {
  return <PrettoSlider {...restProps} />;
}
