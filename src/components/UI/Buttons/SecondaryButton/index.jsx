import { CircularProgress } from "@mui/material";
import cls from "./SecondaryButton.module.scss";

export default function SecondaryButton({
  children,
  fullWidth,
  icon,
  className = "",
  type = "button",
  size = "small",
  loading,
  buttonRef,
  ...restProps
}) {
  return (
    <button
      ref={buttonRef}
      className={`${cls.button} ${className} ${
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
