import { makeStyles } from "@mui/styles";
import { rem } from "utils/pxToRem";

export const useStyles = makeStyles({
  root: {
    "& .MuiDialog-paper": {
      margin: rem(16),
      width: "100%",
      maxWidth: "calc(100% - 100px)",
      height: "100vh",
    },
  },
});
