import { makeStyles } from "@mui/styles";
import { rem } from "utils/pxToRem";

export const useStyles = makeStyles(() => ({
  paper: {
    boxShadow: "0px 1px 12px rgba(0, 0, 0, 0.08)",
    top: `${rem(40)}!important`,
    left: `${rem(1200)}!important`,
    width: rem(123),
    "@media (max-width: 768px)": {
      top: `${rem(68)}!important`,
    },
  },
}));
