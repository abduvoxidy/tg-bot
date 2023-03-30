import React from "react";
import cls from "./BreadCrumbs.module.scss";

function BreadCrumbs({ title = "Главная / Электроника" }) {
  return (
    <div className={cls.root}>
      <p className={cls.breadcrumb}>{title}</p>
    </div>
  );
}

export default BreadCrumbs;
