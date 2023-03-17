import React from "react";
import { categoryList } from "./data";
import cls from "./SidebarCatalog.module.scss";
import Link from "next/link";
import useKeyTranslation from "hooks/useKeyTranslation";

function SidebarCatalog({ subCategories = [] }) {
  const getKey = useKeyTranslation();
  return (
    <div className={cls.root}>
      {subCategories.map((el) => (
        <div key={el.guid} className={cls.list}>
          <p className={cls.title}>{el?.[getKey("name")]}</p>
          {el.children.map((item) => (
            <Link key={item.guid} href="/">
              <a className={cls.link}>{item?.[getKey("name")]}</a>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SidebarCatalog;
