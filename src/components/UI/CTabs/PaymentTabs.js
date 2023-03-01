import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const CustomTabs = styled(Tabs)({
  background: "#F5F5F5",
  padding: "4px",
  borderRadius: "8px",
  "& .MuiTabs-indicator": {
    borderRadius: "8px",
    backgroundColor: "#FFFFFF",
    height: "100%",
  },
});

export function PaymentTabs({ ...restProps }) {
  return <CustomTabs {...restProps} />;
}

const CustomTab = styled(Tab)({
  padding: "8px 16px",
  minHeight: "40px",
  fontWeight: 500,
  fontSize: "14px",
  lineHeight: "24px",
  color: "#000000",
  textTransform: "inherit",
  borderRadius: "8px",
  width: "120px",
  "&.Mui-selected": {
    color: "#000000",
    zIndex: 100,
  },
});

export function PaymentTab({ ...restProps }) {
  return <CustomTab disableRipple {...restProps} />;
}
