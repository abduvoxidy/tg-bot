import React from "react";
import cls from "./BackButton.module.scss";
import { BackArrowIcon } from "components/UI/Icons";
import { useRouter } from "next/router";

function BackButton({
  navigateTo = "/",
  icon,
  className = "",
  children,
  ...restProps
}) {
  const router = useRouter();
  const handleRoute = () => {
    if (navigateTo.length > 1) {
      router.push(navigateTo);
    } else {
      router.back();
    }
  };
  return (
    <button
      onClick={handleRoute}
      className={`${cls.button} ${className}`}
      {...restProps}
    >
      {icon || <BackArrowIcon />}
      <p className={cls.text}>{children}</p>
    </button>
  );
}

export default BackButton;
