import { makeStyles } from "@mui/styles";
import { rem } from "utils/pxToRem";

export const useStyles = makeStyles({
  root: {
    "& .MuiTooltip-tooltip": {
      backgroundColor: "#000 !important",
      color: "#000",
    },
  },
});
