import React from "react";
import cls from "./CategoryList.module.scss";
import Link from "next/link";

function CategoryList(
  {
    categories = [
      "смартфоны samsung",
      "смартфоны xiaomi",
      "iphone",
      "телефон",
      "смартфоны realme",
      "смартфоны poco",
      "смартфоны oppo",
    ],
  },
  className
) {
  return (
    <div className={`${cls.categories} ${className}`}>
      {categories.map((el, index) => (
        <Link href={`/category/${el}`} key={index}>
          <a>
            <div className={cls.categoryItem}>{el}</div>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default CategoryList;
