import React from "react";
import cls from "./BreadCrumbs.module.scss";

function BreadCrumbs() {
  return (
    <div className={cls.root}>
      <p className={cls.breadcrumb}>Главная / Электроника</p>
    </div>
  );
}

export default BreadCrumbs;
