import cls from "./CheckoutCard.module.scss";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function CheckoutCard({
  children,
  title,
  scrollRef,
  className = "",
}) {
  return (
    <>
      <div className={`${cls.card} ${className}`} ref={scrollRef}>
        <h3 className={cls.title}>{title}</h3>
        {children}
      </div>
    </>
  );
}
