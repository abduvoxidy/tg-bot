import React from "react";
import cls from "./CategoriesMenu.module.scss";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import dynamic from "next/dynamic";
const Masonry = dynamic(() => import("react-smart-masonry"), {
  ssr: false,
});
import { useRouter } from "next/router";
import { useCategoriesQuery } from "services/category.service";
import useTranslation from "next-translate/useTranslation";
import useKeyTranslation from "hooks/useKeyTranslation";
import { getNestedCategories } from "utils/getNestedData";

function CatgoriesMenu({
  isActive,
  setIsActive = () => {},
  handleCategory = () => {},
}) {
  const getKey = useKeyTranslation();
  const { t } = useTranslation("common");
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const router = useRouter();

  const { data: categoryData, isLoading } = useCategoriesQuery({
    data: {},
    queryParams: {
      enabled: true,
      onSuccess: (res) => {
        const response = getNestedCategories(
          {
            guid: null,
          },
          res.data.response
        );
        setCategories(response.children);
      },
    },
  });

  useEffect(() => {
    if (isActive) {
      hoverCategory(categories[0].guid);
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

  function hoverCategory(id) {
    const res = categories.find((el) => el.guid === id)?.children;
    setSubCategories(res);
  }

  return (
    <>
      <div className={`${cls.categoriesMenu} ${isActive ? cls.active : ""}`}>
        <div className={cls.row}>
          <div className={cls.left}>
            {categories &&
              categories.map((el, i) => (
                <div
                  onMouseEnter={() => hoverCategory(el.guid)}
                  key={el.guid}
                  className={cls.catalog}
                >
                  <Link href={`/catalog/${el.guid}`}>
                    <a className={cls.link}>{el?.[getKey("name")]}</a>
                  </Link>
                </div>
              ))}
          </div>
          <div className={cls.right}>
            <Masonry columns={2} gap={10}>
              {subCategories &&
                subCategories.length > 0 &&
                subCategories.map((el, index) => (
                  <div key={index} className={cls.category}>
                    <b className={cls.title}>{el?.[getKey("name")]}</b>
                    {el.children.map((item, i) => (
                      <Link key={i} href={`/category/${item?.guid}`}>
                        <a className={cls.link}>{item?.[getKey("name")]}</a>
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
