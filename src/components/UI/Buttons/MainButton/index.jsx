import { CircularProgress } from "@mui/material";
import cls from "./MainButton.module.scss";

export default function MainButton({
  children,
  type = "button",
  fullWidth,
  className = "",
  icon,
  size = "small",
  loading,
  ...restProps
}) {
  return (
    <button
      className={`${cls.mainBtn} ${className} ${
        fullWidth ? cls.fullWidth : ""
      } ${cls[size]}`}
      type={type}
      {...restProps}
    >
      {loading && <CircularProgress size={20} color="inherit" />}
      {icon}
      {children}
    </button>
  );
}
