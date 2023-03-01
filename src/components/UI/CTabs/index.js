import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const CustomTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#ff9910",
    height: "3px",
  },
});

export function StyledTabs({ ...restProps }) {
  return <CustomTabs {...restProps} />;
}

const CustomTab = styled(Tab)({
  height: "56px",
  fontWeight: 700,
  fontSize: "14px",
  lineHeight: "24px",
  color: "#B0BABF",
  textTransform: "inherit",
  "&.Mui-selected": {
    color: "#ff9910",
  },
});

export function StyledTab({ ...restProps }) {
  return <CustomTab {...restProps} />;
}
