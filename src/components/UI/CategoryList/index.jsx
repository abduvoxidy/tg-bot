import React from "react";
import cls from "./CategoryList.module.scss";
import Link from "next/link";
import useKeyTranslation from "hooks/useKeyTranslation";

function CategoryList({ categories = [], className }) {
  const getKey = useKeyTranslation();
  return (
    <div className={`${cls.categories} ${className}`}>
      {categories.map((el, index) => (
        <Link href={`/category/${el}`} key={index}>
          <a>
            <div className={cls.categoryItem}>{el?.[getKey("name")]}</div>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default CategoryList;
