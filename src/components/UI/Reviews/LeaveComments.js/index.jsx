import React from "react";
import Image from "next/image";
import cls from "./LeaveComments.module.scss";

export function LeaveComments() {
  return (
    <main className={cls.main}>
      <h1>Отзыв о товаре Мужские кроссовки Timberland, ...</h1>
      <div className={cls.body}></div>
    </main>
  );
}
