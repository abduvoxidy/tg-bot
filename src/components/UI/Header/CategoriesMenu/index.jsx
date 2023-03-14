import React from "react";
import cls from "./CategoriesMenu.module.scss";
// import { catalog } from "./data";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
// import Masonry from "react-smart-masonry";
import dynamic from "next/dynamic";
const Masonry = dynamic(() => import("react-smart-masonry"), {
  ssr: false,
});
import { useRouter } from "next/router";
import { useCategoriesQuery } from "services/category.service";
import useTranslation from "next-translate/useTranslation";
import useKeyTranslation from "hooks/useKeyTranslation";

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
    data: {
      data: {
        // offset: 0,
      },
    },
    queryParams: {
      enabled: true,
      onSuccess: (res) => {
        const response = getNestedCategories(objectCategory, res.data.response);
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

  const objectCategory = {
    guid: null,
  };

  function getNestedCategories(obj, categoryData) {
    // this function filters categories by subcategory, if category_id
    //will be null it's main category else subcategory
    obj.children = [];
    for (const i in categoryData) {
      if (obj.guid === categoryData[i].category_id) {
        obj.children.push(categoryData[i]);
      }
    }
    for (const j in obj.children) {
      obj.children[j] = getNestedCategories(obj.children[j], categoryData);
    }
    return obj;
  }

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
                  <Link href="/catalog/1">
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
                      <Link
                        key={i}
                        href={`/category/${item?.[getKey("name")]}`}
                      >
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
