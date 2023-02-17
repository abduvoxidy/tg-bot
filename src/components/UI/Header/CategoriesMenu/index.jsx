import React from "react";
import cls from "./CategoriesMenu.module.scss";
import { catalog, categories } from "./data";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import Masonry from "react-smart-masonry";

function CatgoriesMenu({ isActive, handleCategory = () => {} }) {
  const [state, setState] = useState([]);
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isActive]);

  const hoverCatalog = (id) => {
    const res = categories.find((el) => el.catalog_id === id)?.data;
    setState(res);
  };

  useEffect(() => {
    hoverCatalog(catalog[0].id);
  }, []);

  return (
    <>
      <div className={`${cls.categoriesMenu} ${isActive ? cls.active : ""}`}>
        <div className={cls.row}>
          <div className={cls.left}>
            {catalog.map((el, i) => (
              <div
                onMouseEnter={() => hoverCatalog(el.id)}
                onMouseLeave={() => console.log("mouse leave")}
                key={i + "catalog"}
                className={cls.catalog}
              >
                <Link href="/">
                  <a className={cls.link}>{el.name}</a>
                </Link>
              </div>
            ))}
          </div>
          <div className={cls.right}>
            <Masonry columns={3} gap={10}>
              {state &&
                state.length > 0 &&
                state.map((el) => (
                  <div>
                    <b>{el.title}</b>
                    {el.children.map((item) => (
                      <p>{item}</p>
                    ))}
                  </div>
                ))}
            </Masonry>
          </div>
        </div>
      </div>
      <div
        onClick={handleCategory}
        className={`${isActive ? cls.categoriesWrapper : ""}`}
      />
    </>
  );
}

export default CatgoriesMenu;
