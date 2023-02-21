import React from "react";
import cls from "./CategoriesMenu.module.scss";
import { catalog, categories } from "./data";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import Masonry from "react-smart-masonry";
import { useRouter } from "next/router";

function CatgoriesMenu({
  isActive,
  setIsActive = () => {},
  handleCategory = () => {},
}) {
  const [state, setState] = useState([]);
  const router = useRouter();
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isActive]);

  useEffect(() => {
    const closeCategories = () => {
      setIsActive(false);
    };
    router.events.on("routeChangeStart", closeCategories);
    return () => {
      router.events.off("routeChangeStart", closeCategories);
    };
  }, []);

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
                key={i + "catalog"}
                className={cls.catalog}
              >
                <Link href="/catalog/1">
                  <a className={cls.link}>{el.name}</a>
                </Link>
              </div>
            ))}
          </div>
          <div className={cls.right}>
            <Masonry columns={2} gap={10}>
              {state &&
                state.length > 0 &&
                state.map((el, index) => (
                  <div key={index} className={cls.category}>
                    <b className={cls.title}>{el.title}</b>
                    {el.children.map((item, i) => (
                      <Link key={i} href="/category/smartphone">
                        <a className={cls.link}>{item}</a>
                      </Link>
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
