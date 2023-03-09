import React from "react";
import { categoryList } from "./data";
import cls from "./SidebarCatalog.module.scss";
import Link from "next/link";

function SidebarCatalog() {
  return (
    <div className={cls.root}>
      {categoryList.map((el, i) => (
        <div key={i} className={cls.list}>
          <p className={cls.title}>{el.title}</p>
          {el.children.map((item, index) => (
            <Link key={index} href="/">
              <a className={cls.link}>{item}</a>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SidebarCatalog;
